<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EstadoServo extends Model
{
    use HasFactory;
    protected $fillable = [
        'date',
        'min_angle',
        'max_angle',
        'speed',
        'state',
    ];
}