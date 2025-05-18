<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;

class ProductWeight extends Model
{
    
    use HasFactory;

    protected $table = 'product_weights';

    protected $primaryKey = 'product_weights_id';

    protected $fillable = [
        'product_id',
        'weight',
        'product_price',
    ];


    public function product()
{
    return $this->belongsTo(Product::class, 'product_id');
}
}
