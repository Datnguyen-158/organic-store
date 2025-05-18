<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        //  Đây là phần **xác thực dữ liệu (validation)**:
        $validatedData = $request->validate([
            'user_name' => 'required|string|unique:users,user_name',
            'user_password' => 'required|string|min:5',
            'user_email' => 'required|string|unique:users,user_email',
        ],
            [
                'required' => ':attribute không được để trống',
                'unique' => ':attribute đã tồn tại',
                'min' => ':attribute tối thiểu là :min',
            ],
            [
                'user_name' => 'tên khách hàng',
                'user_password' => 'mật khẩu',
                'user_email' => 'email',
            ]
        );
        $get_user = new User;
        //   gán các giá trị từ $validatedData vào đối tượng $get_user
        if ($get_user) {
            $get_user->user_name = $validatedData['user_name'];
            $get_user->user_password = Hash::make($validatedData['user_password']); // Sử dụng Hash::make()
            $get_user->user_email = $validatedData['user_email'];
            $get_user->user_role = 0;
            // Lưu đối tượng vào cơ sở dữ liệu
            $get_user->save();

            // Trả về phản hồi thành công, trả về phản hồi JSON với 2 thông tin
            return response()->json(
                [
                    'message' => 'đăng ký tài khoản thành công',
                    'user_id' => $get_user->user_id,
                ]
            );
        } else {
            return response()->json(
                [
                    'message' => 'thêm dữ liệu thất bại',
                ], 422
            );
        }
    }

    // Đăng nhập
    public function User_Login(Request $request)
    {
        // Lấy email và mật khẩu từ dữ liệu người dùng gửi lên
        $user_email = $request->user_email;
        $user_password = $request->user_password;
        // Laravel sẽ so sánh email và mật khẩu với dữ liệu trong database.
        // Hàm authAttemp sẽ
        // Tìm bản ghi user_email = $user_email trong DB.
        // Nếu đúng → $status = true, sai → $status = false.
        $status = Auth::attempt(['user_email' => $user_email, 'password' => $user_password]);

        if ($status) {
            // Gọi Auth::user() để lấy thông tin người dùng hiện tại vừa đăng nhập thành công.
            $user = Auth::user();
            // Tạo token đăng nhập bằng Sanctum giúp xác thực api
            // Token này dùng để frontend có thể gọi các API tiếp theo mà không cần đăng nhập lại.
            $token = $request->user()->createToken('Token_name');

            return response()->json([
                'message' => 'đăng nhập thành công',
                'user' => [
                    'user_id' => $user->user_id,
                    'user_role' => $user->user_role,
                    'user_name' => $user->user_name,

                ],
                // $token->plainTextToken là chuỗi token sẽ trả về client
                'token' => $token->plainTextToken,
            ]);
        }

        return response()->json([
            'message' => 'đăng nhập thất bại sai tk hoặc mk',
        ], 401);

    }

    public function ShowProfile($user_id)
    {
         $userID = User::with('receiver')
                    ->where('user_id', $user_id)
                    ->get();
        return response()->json(
            [
                'message' => 'lấy dữ liệu thành công',
                'data' => $userID,
            ]
        );
    }

    // Đăng xuất
    public function logout(Request $request)
    {
        // 1. Xóa tất cả token của user hiện tại
        $request->user()->tokens()->delete();

        // 2. Trả về phản hồi JSON
        return response()->json(
            [
                'message' => 'đăng xuất và xóa token thành công',
                'data' => $request->user(),
            ]
        );

    }
}
