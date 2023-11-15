<?php

namespace App\Http\Requests\Rating;

use Illuminate\Foundation\Http\FormRequest;

class SaveAgentRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'agent_id' => ['required', 'sometimes'],
        ];
    }

    public function messages(): array
    {
        return [
            'agent_id.required' => 'Veuillez choisir un agent á ajouter.'
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
