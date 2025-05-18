<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        // Trả về route hiện tại của request (đang được gọi).
        // và Lấy tham số user từ route.
           $user = $this->route()->user;

        return [
            "user_name" => [
                "required",
                "string",
//                 Rule::unique(...): Không được trùng user_name trong bảng users
// ->ignore($user->user_id, 'user_id'):
// → Cho phép user hiện tại giữ nguyên tên của họ mà không bị lỗi "trùng"
                Rule::unique('users','user_name')->ignore($user->user_id,'user_id')
            ],
            // "user_password" => 'required|string|min:5',
            "user_email" => [
                "required",
                "string",
                Rule::unique('users','user_email')->ignore($user->user_id,'user_id')
            ],
            "user_role" => 'required|numeric|in:0,1',
        ];
    }
     public function messages(){
        return[
            "required" => ':attribute không được để trống',
            "unique" => ":attribute đã tồn tại",
            "min" => ':attribute tối thiểu là :min'
        ];
    }

    public function attributes(){
        return [
            "user_name" => 'tên khách hàng',
            "user_password" => 'mật khẩu',
            "user_email" => 'email',
            "user_role" => 'quyền hạn',
        ];
    }
}
