<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SensorTempHum extends Model
{
    use HasFactory;
    protected $fillable = [
        'date',
        'valueHum',
        'valueTemp',
        'state',
    ];
}