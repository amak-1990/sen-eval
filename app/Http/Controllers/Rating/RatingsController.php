<?php

namespace App\Http\Controllers\Rating;

use App\Exceptions\ModelNotFoundException;
use App\Exceptions\Rating\ValidatorAlreadyExistException;
use App\Exceptions\UnauthorizedActionException;
use App\Http\Controllers\Controller;
use App\Http\Requests\Rating\SaveRatingRequest;
use App\Models\Rating\Goal;
use App\Models\Rating\Rating;
use App\Models\Rating\Validator;
use App\Models\Settings\SkillType;
use App\Models\User;
use App\Services\Rating\RatingService;
use App\Services\Security\UserService;
use Inertia\Inertia;

class RatingsController extends Controller
{
    public function __construct(private readonly RatingService $ratingService)
    {
    }

    public function index()
    {
        try {
            return Inertia::render('Rating/RatingsList', [
                'user' => User::with('org')->findOrFail(\Auth::id()),
                'ratings' => Rating::where('evaluated_id', '=', \Auth::id())->with('evaluator', 'phase', 'evaluated')->paginate(10)
            ]);
        } catch (ModelNotFoundException $e) {
            alert_error($e->getMessage());
            return redirect()->back();
        }
    }

    public function show(string $rating_id)
    {
        try {
            $rating = Rating::with('phase', 'evaluator')->withSum('specific_skills', 'rating_skill_mark')->withSum('general_skills', 'rating_skill_mark')->findOrFail($rating_id);
            // dd($rating); 
            // dd('Eval : '. $rating->evaluator_id .' user :'. \Auth::id() );
            if ($rating->evaluated_id !== \Auth::id() && $rating->evaluator_id !== \Auth::id()) throw new UnauthorizedActionException();
            $evaluator = $rating->evaluator;
            return Inertia::render('Rating/RatingSkills', [
                'rating' => $rating,
                'agent' => $rating->evaluated,
                'marking' => ['specific' => SkillType::SPECIFIC_MARKING, 'general' => SkillType::GENERAL_MARKING, 'perf' => SkillType::GOALS_MARKING],
                'specific_skills' => $rating->specific_skills()->get(),
                'skills' => $rating->general_skills()->get(),
                'goals' => Goal::where('phase_id', $rating->phase_id)->where('evaluated_id', $rating->evaluated_id)->with('period', 'phase')->orderBy('evaluation_period_id')->get(),
                'others' => $evaluator->org_id ? (new UserService())->findSameOrgUsers($evaluator) : [],
                'agent_n2' => $evaluator->n1,
                'validators' => Validator::where('rating_id', '=', $rating->rating_id)->with('user')->get(),
            ]);
        } catch (ModelNotFoundException|UnauthorizedActionException $e) {
            alert_error($e->getMessage());
            return redirect()->back();
        }
    }

    public function update(SaveRatingRequest $request, string $rating_id)
    {
        try {
            $this->ratingService->update($request->validated(), $rating_id);
            alert_success('Évaluation enregistré avec succès.');
        } catch (ModelNotFoundException $e) {
            alert_error($e->getMessage());
        } catch (ValidatorAlreadyExistException $e) {
            alert_success('Commentaire sauvegardé. ' . $e->getMessage());
        } finally {
            return redirect()->back();
        }
    }
}
