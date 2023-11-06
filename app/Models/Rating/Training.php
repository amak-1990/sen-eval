<?php

namespace App\Models\Rating;

use App\Models\Settings\TrainingType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Training extends Model
{
    protected $table = 'rating_trainings';
    protected $primaryKey = 'rating_training_id';
    protected $fillable = ['asked_by_evaluator','asked_by_evaluated','rating_id','training_type_id'];
    public function getForeignKey()
    {
        return $this->primaryKey;
    }
    public function rating(): BelongsTo {
        return $this->belongsTo(Rating::class,'rating_id','rating_id');
    }
    public function type(): BelongsTo {
        return $this->belongsTo(TrainingType::class,'training_type_id','training_type_id');
    }
}
