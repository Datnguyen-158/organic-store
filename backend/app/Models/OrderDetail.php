<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    use HasFactory;

    protected $table = 'order_details';

    protected $primaryKey = 'orderDetail_id';

    protected $fillable = [
        'order_id',
        'product_id',
        'product_weights_id',
        'orderDetail_quantity',
    ];

    public $timestamps = false;

    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id', 'order_id');
    }

    public function productWeight()
{
    return $this->belongsTo(ProductWeight::class, 'product_weights_id', 'product_weights_id');
}

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id', 'product_id');
    }
}
