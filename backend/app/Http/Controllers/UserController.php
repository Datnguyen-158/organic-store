<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRequest;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use function PHPUnit\Framework\returnArgument;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::latest()->get();

        return response()->json([
            'success' => true,
            'data' => $user,
            'message' => 'Users successfully',

        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */

//      Nhận dữ liệu từ form hoặc API gửi lên
// Kiểm tra (validate) dữ liệu
// Tạo bản ghi mới trong database
    public function store(UserRequest $request)
    {
      $user= new User();
      $user->fill(request()->all());
      $user->user_password = Hash::make($request->user_password);
      $user->save();
      
        return response()->json([
            'success' => true,
            'data' => $user,
            'message' => 'Users successfully',
        ],201);
    }

    /**
     * Display the specified resource.
     */
    // public function show( User $users)
    // {
    //     return response()->json([
    //         'success'=> true,
    //         'data'=>$users,
    //         'message'=>'Users successfully'
    //     ]);
    // }

// Dùng để hiển thị thông tin chi tiết của một người dùng theo id
    public function show(String $id)
    {
        $user= User::find($id);
        if(!$user){
            return response()->json([
            'success'=> true,
            'message'=>'Users not found'
        ]);
        }else{
  return response()->json([
            'success'=> true,
            'data'=>$user,
            'message'=>'Users successfully'
        ]);
        }
      
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
         $user->user_name = $request->user_name;
        // $user->user_password = Hash::make($request->user_password); // Sử dụng Hash::make()
        $user->user_email = $request->user_email;
        $user->user_role = $request->user_role;

            $user->save();

            return response()->json(
                [
                    "message" => "update dữ liệu thành công",
                    "data" => $user,
                ]
            );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
       $user= User::find($id);
       if(!$user){
            return response()->json([
            'message'=>'Users not found'
        ],404);
        }
        $user->delete();
  return response()->json([
            'success'=> true,
            'message'=>'Users delete successfully'
        ]);
        
    }
     public function HandleCart(User $user)
    {
        $get_cart = $user->carts()->with('product')->get();
        $count_cart = $user->carts()->count('cart_id');

        return response()->json(
            [
                "message" => "đã lấy dữ liệu thành công",
                "data" => $get_cart,
                 "count_cart" => $count_cart,
            ]
        );
    }
     public function ShowReceivers(User $user)
    {
    
        $get_receivers = $user->receiver()->orderBy('receiver_type','desc')->get();
        if(count($get_receivers)>0){
            return response()->json(
                [
                    "message" => "đã lấy dữ liệu thành công",
                    "data" => $get_receivers,
                ]
            );
        }else{
            return response()->json(
                [
                    "message" => "lấy dữ liệu thất bại hoặc không có",
                ],404
            );
        }
    }
    public function showByType(User $user)
    {
        $get_receivers = $user->receiver()->where('receiver_type',1)->get();
        // $receiver= Receiver::where('receiver_type',1)->get();

        if($get_receivers->isNotEmpty()){
            return response()->json(
                [
                    "message" => "đã get thành công",
                    "data" => $get_receivers,
                ]
            );
        }else{
            return response()->json(
                [
                    "message" => "chưa có người nhận nào cả",
                ],404
            );
        }
            
    }
       public function GetOrderByUser(User $user)
    {
        $get_orders = $user->orders()->with('receiver')->get();
            return response()->json(
                [
                    "message" => "đã get thành công",
                    "data" => $get_orders,
                ]
            );
    }
     public function GetUserStatistical()
    {
        $data = new \stdClass();
        $data->user_count = User::where('user_role',0)->count();
            return response()->json(
                [
                    "message" => "đã get thành công",
                    "data" => $data,
                ]
            );
    }
    public function changePassword(Request $request){
        $user = User::find($request->user_id);
        if (!Hash::check($request->current_password, $user->user_password)) {
            return response()->json(['message' => 'Mật khẩu hiện tại không đúng'], 403);
        }
    
        $user->user_password = Hash::make($request->new_password);
        $user->save();                                                     
        return response()->json(['message' => 'Đổi mật khẩu thành công']);
    }
}
