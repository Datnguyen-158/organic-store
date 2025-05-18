<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $table = 'carts';

    protected $primaryKey = 'cart_id';

    public $timestamps = false;

     protected $fillable = [
        'user_id',
        'product_id',
        'cart_quantity',
        'product_weights_id',
    ];
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id', 'product_id');
    }
        public function product_weights()
    {
        return $this->belongsTo(ProductWeight::class, 'product_weights_id', 'product_weights_id');
    }
}
