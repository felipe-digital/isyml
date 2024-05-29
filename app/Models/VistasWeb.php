<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VistasWeb extends Model
{
    protected $table = 'vistas_web';
    const CREATED_AT = 'created';
    const UPDATED_AT = 'updated';

    protected $guarded = ['num_visits'];

}
