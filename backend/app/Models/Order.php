<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $table = 'orders';

    protected $primaryKey = 'order_id';
    protected $fillable = [
        'user_id',
        'TotalPrice',
        'order_status','order_date',
        'receiver_id',
        // ... bất kỳ trường nào bạn đang truyền vào Order::create()
    ];
    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }

    public function orderDetails()
    {
        return $this->hasMany(OrderDetail::class, 'order_id', 'order_id');
    }
    public function receiver(){
        return $this->hasOne(Receiver::class,'receiver_id','receiver_id');
    }
    public function payment()
{
    return $this->hasOne(Payment::class,'order_id');
}
}