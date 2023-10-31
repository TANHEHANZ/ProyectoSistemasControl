<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SensorTempHum;

class ControllerTempHum extends Controller
{
    public function index()
    {
        return SensorTempHum::all();
    }
    public function store(Request $request)
    {
        $sendDht=new SensorTempHum();      
        $sendDht->date=$request->date;
        $sendDht->valueHum=$request->valueHum;
        $sendDht->valueTemp=$request->valueTemp;
        $sendDht->state=$request->state;
        $sendDht->save();
        return $sendDht;
    }
    public function update(Request $request, $id)
    {
        $sendDht=SensorTempHum::find($id);
        $sendDht->date=$request->date;
        $sendDht->valueHum=$request->valueHum;
        $sendDht->valueTemp=$request->valueTemp;
        $sendDht->state=$request->state;
        $sendDht->save();
        return $sendDht;
    }
    public function destroy($id)
    {
        return SensorTempHum::destroy($id);
    }
}