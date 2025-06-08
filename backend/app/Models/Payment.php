<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    //
    use HasFactory;
    protected $table = 'payment';
    protected $primaryKey = 'payment_id';
    public $timestamps = false;
    protected $fillable = [
        'order_id',
        'payment_method',
        'status',
    ];

    // Mối quan hệ với Order
    public function order() {
        return $this->belongsTo(Order::class, 'order_id');
    }
}