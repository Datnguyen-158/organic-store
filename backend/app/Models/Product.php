<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $primaryKey = 'product_id';

    protected $fillable = [
        'product_name',
        'product_img',
        'product_price',
        'product_dsc',
        'category_id',
        'product_quantity',
    ];

    public $timestamps = false;

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'category_id');
    }

    // Quan hệ với bảng order_details
    public function orderDetails()
    {
        return $this->hasMany(OrderDetail::class);
    }

    // Quan hệ với bảng cart
    public function cart()
    {
        return $this->hasMany(Cart::class);
    }
public function productDetails()
{
    return $this->hasMany(ProductDetail::class, 'product_id'); // quan trọng
}
public function weights()
{
    return $this->hasMany(ProductWeight::class, 'product_id');
}
}
