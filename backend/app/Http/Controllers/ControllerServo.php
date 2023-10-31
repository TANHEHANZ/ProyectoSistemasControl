<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EstadoServo;

class ControllerServo extends Controller
{
    public function index()
    {
        return EstadoServo::all();
    }
    public function store(Request $request)
    {
        $serv=new EstadoServo();
        $serv->date=$request->date;
        $serv->min_angle=$request->min_angle;
        $serv->max_angle=$request->max_angle;
        $serv->speed=$request->speed;
        $serv->state=$request->state;
        $serv->save();
        return $serv;
    }
    public function update(Request $request, $id)
    {
        $serv=EstadoServo::find($id);
        $serv->date=$request->date;
        $serv->min_angle=$request->min_angle;
        $serv->max_angle=$request->max_angle;
        $serv->speed=$request->speed;
        $serv->state=$request->state;
        $serv->save();
        return $serv;
    }
    public function destroy($id)
    {
        return EstadoServo::destroy($id);
    }
}