<?php

namespace App\Http\Controllers;

use App\Models\SensorTurbidez;
use Illuminate\Http\Request;

class ControllerTurbidez extends Controller
{
    public function index()
    {
        return SensorTurbidez::all();
    }
    public function update(Request $request, $id)
    {
        $SenTur=SensorTurbidez::find($id);
        $SenTur->date=$request->date;
        $SenTur->valueTur=$request->valueTur;
        $SenTur->state=$request->state;
        $SenTur->save();
        return $SenTur;
    }
    public function destroy($id)
    {
        return SensorTurbidez::destroy($id);
    }
}