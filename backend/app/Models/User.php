<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasApiTokens,HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $primaryKey = 'user_id';

    protected $table = 'users';

    protected $fillable = ['user_name', 'user_email', 'user_password'];

    protected $hidden = [
        'user_password',
    ];
public function getAuthPassword()
{
    return $this->user_password;
}
    // Quan hệ với bảng orders
    public function orders()
    {
        return $this->hasMany(Order::class, 'user_id', 'user_id');
    }

    public $timestamps = false;

    // Quan hệ với bảng cart
    public function carts()
    {
        return $this->hasMany(Cart::class, 'user_id', 'user_id');
    }  public function receiver()
    {
        return $this->hasMany(Receiver::class, 'user_id', 'user_id');
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
