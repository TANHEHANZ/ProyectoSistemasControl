<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSensorTurbidezTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sensor_turbidezs', function (Blueprint $table) {
            $table->id();
            $table->dateTime('date');
            $table->float('valueTur');
            $table->boolean('state')->nullable();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('sensor_turbidezs');
    }
}