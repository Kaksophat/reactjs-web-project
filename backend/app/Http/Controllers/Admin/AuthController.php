<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name"=> "required",
            "email"=> "required",
            "password"=> "required",
          
        ]);

        if($validator->fails()){
            return response()->json([
                "status"=> 400,
                "error"=> $validator->errors(),
            ],400);
        }
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);


        return response()->json([
            'status' =>200,
            'user' => $user
        ]);
    }
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string'
        ]);

        $user = User::where('email', $request->email)->first();
        if(!$user || !Hash::check($request->password, $user->password)){
            return response()->json([
                'status' => 401,
                'message' => 'Unauthorized'
            ]);
        }
        else{
            $token = $user->createToken('authToken')->plainTextToken; 
            return response()->json([
                'status' => 200,
                'token' => $token,
                "user" => $user
            ]);
        }

     
    }
}
