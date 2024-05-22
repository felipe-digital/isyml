<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebController extends Controller
{
    public function indexView(){

        return view('Index.home');
    }
    public function viewRachelP(){

        return view('Profiles.rachel-p');
    }
}
