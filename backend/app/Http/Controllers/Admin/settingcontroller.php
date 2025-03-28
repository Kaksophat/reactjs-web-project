<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Validator;

class settingcontroller extends Controller
{
    public function index ($id,Request $request){
        $setting=setting::find($id);
        return response()->json(
            [
                "status" => 200,
                "setting" =>  $setting
            ]
            );
    }
    public function store (Request $request)
    {
        $vailadator = Validator::make($request->all(), [
            "image_logo" => "required",
            "about_us" => "required",
            "image_about_us" => "required",
            "phone" => "required",
            "email" => "required",
            "address" => "required",
            "map" => "required",
            "facebook" => "required",
            "instagram" => "required",
            "twitter" => "required",
            "youtube" => "required",
        ]);

        if($vailadator->fails()){
            return response()->json($vailadator->errors(), 400);
        }


        $setting = new setting();

        $image_logo = $request->file('image_logo');
        $imageName = time().'.'.$request->image_logo->extension();  
        $image_logo->move(public_path('/uploads'), $imageName);

        $image_about_us = $request->file('image_about_us');
        $imageabout = time().'.'.$request->image_about_us->extension();  
        $image_about_us->move(public_path('/uploads'), $imageabout);

        $setting->image_logo = $imageName;
        $setting->about_us = $request->about_us;
        $setting->image_about_us = $imageabout;
        $setting->phone = $request->phone;
        $setting->email = $request->email;
        $setting->address = $request->address;
        $setting->map = $request->map;
        $setting->facebook = $request->facebook;
        $setting->instagram = $request->instagram;
        $setting->twitter = $request->twitter;
        $setting->youtube = $request->youtube;
        $setting->save();

        return response()->json([
            "status" => 201,
            "setting" =>  $setting
        ], 201);
    }
}
