<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSensorTepHumsTable extends Migration
{

    public function up()
    {
        Schema::create('sensor_temp_hums', function (Blueprint $table) {
            $table->id();
            $table->dateTime('date');
            $table->float('valueHum');
            $table->float('valueTemp');
            $table->boolean('state')->nullable();
            $table->timestamps();
        });
    }

 
    public function down()
    {
        Schema::dropIfExists('sensor_temp_hums');
    }
}