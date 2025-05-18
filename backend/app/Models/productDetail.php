<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class productDetail extends Model
{
        use HasFactory;

    protected $table = 'productDetail';
    protected $primaryKey = 'productDetail_id';

    protected $fillable = [
        'productDetail_image',
        'productDetail_desc',
        'productDetail_content',
        'product_id',
    ];

    // Quan hệ với Product
 public function product()
{
    return $this->belongsTo(Product::class, 'product_id');
}
}
