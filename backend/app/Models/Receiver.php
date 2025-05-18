<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Receiver extends Model
{
     use HasFactory;

    protected $table = "receiver";
    protected $primaryKey = "receiver_id";

    public $timestamps  = false;
protected $fillable = [
        'receiver_name',
        'user_id',
        'receiver_phone',
        'receiver_city',
        'receiver_district',
        "receiver_desc",
        'receiver_commune',
        'receiver_type',
    ];
    public function user(){
        return $this->belongsTo(User::class,'user_id','user_id');
    }
    public static function setDefaultAddress($userId, $receiver_id)
    {
        // Cập nhật tất cả các địa chỉ của người dùng thành type = 0
        self::where('user_id', $userId)->update(['receiver_type' => 0]);

        // Cập nhật địa chỉ được chọn thành type = 1 (địa chỉ mặc định)
        $address = self::find($receiver_id);
        if ($address && $address->user_id == $userId) {
            $address->receiver_type = 1;
            $address->save();
            return $address;
        }
        return null;
    }
    public static function getDefaultAddress($userId)
    {
        return self::where('user_id', $userId)
                    ->where('receiver_type', 1)
                    ->first(); // Lấy một địa chỉ mặc định đầu tiên
    }
}
