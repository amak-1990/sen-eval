<?php

namespace App\Services\Phase;

use App\Models\Phase\Phase;
use App\Models\Settings\PeriodType;
use App\Models\Settings\Skill;
use Carbon\Carbon;

class PhaseService
{
    public function create(mixed $validated): void
    {
        $phase = Phase::create($validated);
        $this->generatePeriods($phase);
        $this->generateSkills($phase);
    }

    public function update(string $id, mixed $validated): void
    {
        $phase = Phase::findOrFail($id);
        $phase->update($validated);
        foreach ($phase->periods()->get() as $period) {
            $period->delete();
        }
        $this->generatePeriods($phase);
    }

    public function generatePeriods(Phase $phase): void
    {
        switch ($phase->period_type_id) {
            case PeriodType::SEMIYEARLY:
                for($i = (12/2); $i <= 12; $i = $i + (12/2)) {
                    $start_date = Carbon::createFromDate($phase->phase_year,$i)->startOfMonth()->toDateTimeString();
                    $end_date = Carbon::createFromDate($phase->phase_year,$i)->endOfMonth()->addDays(5)->toDateTimeString();
                    $phase->periods()->create([
                        'evaluation_period_start' => $start_date,
                        'evaluation_period_end' => $end_date
                    ]);
                }
                break;
            case PeriodType::TRIMONTHLY:
                for($i = (12/4); $i <= 12; $i = $i + (12/4)) {
                    $start_date = Carbon::createFromDate($phase->phase_year,$i)->startOfMonth()->toDateTimeString();
                    $end_date = Carbon::createFromDate($phase->phase_year,$i)->endOfMonth()->addDays(5)->toDateTimeString();
                    $phase->periods()->create([
                        'evaluation_period_start' => $start_date,
                        'evaluation_period_end' => $end_date
                    ]);
                }
                break;
            case PeriodType::MONTHLY:
                for($i = 1; $i <= 12; $i = $i + 1) {
                    $start_date = Carbon::createFromDate($phase->phase_year,$i)->startOfMonth()->toDateTimeString();
                    $end_date = Carbon::createFromDate($phase->phase_year,$i)->endOfMonth()->addDays(5)->toDateTimeString();
                    $phase->periods()->create([
                        'evaluation_period_start' => $start_date,
                        'evaluation_period_end' => $end_date
                    ]);
                }
                break;
            default: break;
        }
    }


    public function  generateSkills(Phase $phase): void
    {
        $skills = Skill::where('skill_is_active','=',1)->select(['skill_id','skill_marking'])->get();
        foreach ($skills as $skill) {
            $phase->skills()->attach($skill->skill_id,['phase_skill_marking' => $skill->skill_marking]);
        }
    }

    public function destroy(int $id): void
    {
        Phase::findOrFail($id)->delete();
    }
}