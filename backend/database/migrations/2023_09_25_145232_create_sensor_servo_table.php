<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSensorServoTable extends Migration
{
    public function up()
    {
        Schema::create('estado_servos', function (Blueprint $table) {
            $table->id();
            $table->dateTime('date');
            $table->float('min_angle');
            $table->float('max_angle');
            $table->integer('speed');
            $table->boolean('state')->nullable();

            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('estado_servos');
    }
}