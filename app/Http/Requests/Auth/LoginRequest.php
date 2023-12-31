<?php

namespace App\Http\Requests\Auth;

use App\Models\User;
use Hash;
use Illuminate\Auth\Events\Lockout;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'user_login' => ['required', 'string'],
            'password' => ['required', 'string'],
        ];
    }

    public function messages(): array
    {
        return [
            'user_login.required' => 'Ce champ est obligatoire.',
            'password.required' => 'Ce champ est obligatoire.'
        ];
    }

    /**
     * Attempt to authenticate the request's credentials.
     *
     * @throws ValidationException
     */
    public function authenticate(): void
    {
        $this->ensureIsNotRateLimited();

        $credentials = [
            'samaccountname' => $this->get('user_login'),
            'password' => $this->get('password'),
        ];

        if (!Auth::attempt($credentials, $this->boolean('remember'))) {
            $this->throwLoginError();
        }

        RateLimiter::clear($this->throttleKey());
    }

    /**
     * Ensure the login request is not rate limited.
     *
     * @throws ValidationException
     */
    public function ensureIsNotRateLimited(): void
    {
        if (!RateLimiter::tooManyAttempts($this->throttleKey(), 5)) {
            return;
        }

        event(new Lockout($this));

        $seconds = RateLimiter::availableIn($this->throttleKey());

        throw ValidationException::withMessages([
            'user_login' => trans('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => ceil($seconds / 60),
            ]),
        ]);
    }

    /**
     * Get the rate limiting throttle key for the request.
     */
    public function throttleKey(): string
    {
        return Str::transliterate(Str::lower($this->input('user_login')) . '|' . $this->ip());
    }

    private function throwLoginError()
    {
        RateLimiter::hit($this->throttleKey());
        throw ValidationException::withMessages([
            'user_login' => trans('auth.failed'),
        ]);
    }

    public function authenticateFromDb(): bool
    {
        $this->ensureIsNotRateLimited();
        try {
            $user = User::where('user_login', $this->get('user_login'))->firstOrFail();
            if (Hash::check($this->get('password'), $user->password)) {
                Auth::login($user);
                RateLimiter::clear($this->throttleKey());
                return true;
            } else {
                return false;
            }
        } catch (\Exception) {
            return false;
        }
    }
}
