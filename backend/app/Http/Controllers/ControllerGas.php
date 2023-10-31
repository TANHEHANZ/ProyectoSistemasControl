<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SensorGas;

class ControllerGas extends Controller
{
    public function index()
    {
        return SensorGas::all();
    }
    public function store(Request $request)
    {
        $SenGas=new SensorGas();
        $SenGas->date=$request->date;
        $SenGas->valueGas=$request->valueGas;
        $SenGas->state=$request->state;
        $SenGas->save();
        return $SenGas;
    }
    public function update(Request $request, $id)
    {
        $SenGas=SensorGas::find($id);
        $SenGas->date=$request->date;
        $SenGas->valueGas=$request->valueGas;
        $SenGas->state=$request->state;
        $SenGas->save();
        return $SenGas;
    }
    public function destroy($id)
    {
        return SensorGas::destroy($id);
    }
}