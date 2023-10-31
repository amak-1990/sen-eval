<?php

namespace App\Models\Phase;

use App\Models\Group;
use App\Models\Settings\Skill;
use App\Models\Settings\SkillType;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Searchable\Searchable;
use Spatie\Searchable\SearchResult;

class Phase extends Model implements Searchable
{
    protected $table = 'phases';

    protected $primaryKey = 'phase_id';
    protected $fillable = ['phase_name','phase_year','period_type_id','updated_by'];

    public function getForeignKey()
    {
        return $this->primaryKey;
    }
    public function getSearchResult(): SearchResult
    {
        return new SearchResult(
            $this,
            $this->phase_name,
        );
    }

    public function skills(): BelongsToMany {
        return  $this->belongsToMany(Skill::class,'phase_skills','phase_id','skill_id')->withPivot('phase_skill_marking','phase_skill_is_active','phase_skill_id');
    }

    public function specific_skills(): BelongsToMany {
        return $this->skills()->where('skills.skill_type_id','=',SkillType::SPECIFIC);
    }

    public function general_skills_cadre(): BelongsToMany
    {
        return $this->skills()->where('skills.skill_type_id','=',SkillType::GENERAL)->where('skills.group_id','=',Group::CADRE);
    }
    public function general_skills_others(): BelongsToMany
    {
        return $this->skills()->where('skills.skill_type_id','=',SkillType::GENERAL)->where('skills.group_id','!=',Group::CADRE);
    }

    public function periods(): HasMany {
        return $this->hasMany(EvaluationPeriod::class,'phase_id','phase_id');
    }
}
