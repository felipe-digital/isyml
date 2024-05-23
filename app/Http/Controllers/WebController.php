<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebController extends Controller
{
    public function indexView(){

        //return view('Index.home');
        return redirect()->to('https://wa.me/18134010513?text=Hi%20Phillip%21%20I%27m%20interested%20on%20create%20a%20*ISYML*%20profile');
    }
    public function viewRachelP(){

        return view('Profiles.rachel-p');
    }
}
