<?php

use \App\Models\VistasWeb;

function countViewWeb($urlPathName){

    if ($urlPathName){
        $w2 = VistasWeb::where('url_pathname', $urlPathName)->first();
        $t2 = VistasWeb::where('url_pathname', $urlPathName)->update(['num_visits' => ($w2->num_visits + 1)]);
    }else{
        false;
    }

    return true;
}
