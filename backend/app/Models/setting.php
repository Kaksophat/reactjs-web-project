<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class setting extends Model
{
    protected $appends = ['image_url','image_about_us_url'];

    public function getImageUrlAttribute()
    {
        return asset('uploads/' . $this->image_logo);


    }
    public function getImageAboutUsUrlAttribute()
    {
        return asset('uploads/' . $this->image_about_us);
    }

}
