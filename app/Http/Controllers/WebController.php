<?php

namespace App\Http\Controllers;

use App\Models\VistasWeb;
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

    public function ajaxGetViews(Request $request){
        $pathName = $request->input('pathName');

        $w1 = \App\Models\VistasWeb::where('url_pathname', $pathName)->first();
        $t1 = \App\Models\VistasWeb::where('url_pathname', $pathName)->update(['num_visits' => ($w1->num_visits + 1)]);
        $z1 = \App\Models\VistasWeb::where('url_pathname', $pathName)->first();

        return response()->json(['code' => 200,
            'views' => number_format( $z1->num_visits, 0, ".", ","),
        ]);
    }
}
