<?php

namespace App\Models\Settings;

use Eloquent;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Searchable\Searchable;
use Spatie\Searchable\SearchResult;

class SkillType extends Model implements Searchable
{
    use SoftDeletes;
    protected $table = 'skill_types';
    protected $primaryKey = 'skill_type_id';
    protected $fillable = ['skill_type_name', 'skill_type_desc','skill_type_marking'];

    public function getForeignKey()
    {
        return $this->primaryKey;
    }

    public function getSearchResult(): SearchResult
    {
        return new SearchResult(
            $this,
            $this->skill_type_name,
        );
    }

    public function skills(): HasMany
    {
        return $this->hasMany(Skill::class);
    }
}