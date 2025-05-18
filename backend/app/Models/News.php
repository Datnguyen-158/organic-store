<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    //
    use HasFactory;
    protected $table = 'news';
    protected $primaryKey = 'new_id';
    public $timestamps = false;

    protected $fillable = ['new_title', 'new_content', 'new_img'];
}