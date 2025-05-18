<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
        return [
            "user_name" => 'required|string|unique:users,user_name',
            "user_password" => 'required|string|min:5',
            "user_email" => 'required|string|unique:users,user_email',
            "user_role" => 'required|in:0,1',
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