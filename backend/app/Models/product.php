<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    protected $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
        return asset('uploads/' . $this->image);
    }
}
