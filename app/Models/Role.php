<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\Searchable\Searchable;
use Spatie\Searchable\SearchResult;

class Role extends Model implements Searchable
{
    use HasFactory;

    public const ROOT = 1;
    public const ADMIN = 2;
    public const USER = 3;
    public const VIEWER = 4;

    protected $table = 'roles';
    protected $primaryKey = 'role_id';
    protected $fillable = ['role_code', 'role_desc', 'role_name', 'updated_by'];

    public function getForeignKey()
    {
        return $this->primaryKey;
    }

    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }

    public function getSearchResult(): SearchResult
    {
        return new SearchResult(
            $this,
            $this->role_code,
        );
    }

}
