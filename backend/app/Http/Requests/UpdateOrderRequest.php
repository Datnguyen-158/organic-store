<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
      
        return [
            "order_date" => 'required|string|min:7',
            "order_status" => 'required|numeric',
            "order_totalmoney" => 'required|numeric',
            "user_id" => 'required|numeric|exists:users,user_id',
            "order_content" => 'required|string',
            "receiver_id" => 'required|numeric|exists:receiver,receiver_id',
        ];
    }

    public function messages(){
        return[
            "required" => ':attribute không được để trống',
            "exists" => ":attribute khong tồn tại",
        ];
    }

    public function attributes(){
        return [
            "order_date" => 'ngay tao don hang',
            "order_status" => 'trang thai don hang',
            "order_totalmoney" => 'tien don hang',
            "user_id" => 'khach hang',
            "order_content" => 'noi dung don hang',
            "receiver_id" => 'nguoi nhan',
        ];
    }
}
