<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReceiverRequest extends FormRequest
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
            "receiver_phone" => 'required|string|min:10|unique:receiver,receiver_phone',
            "user_id" => 'required|numeric|exists:users,user_id',
            "receiver_name" => 'required|string',
            "receiver_city" => 'required|string',
            "receiver_district" => 'required|string',
            "receiver_commune" => 'required|string',
            "receiver_desc" => 'required|string',
            "receiver_type" => 'required|int',
        ];
    }

    public function messages(){
        return[
            "required" => ':attribute không được để trống',
            "unique" => ":attribute đã tồn tại",
            "exists" => ":attribute không tồn tại",
            "min" => ":attribute tối thiểu :min kí tự",
        ];
    }

    public function attributes(){
        return [
            "receiver_phone" => 'số điện thoại người nhận',
            "user_id" => 'Id Người dùng',
            "receiver_name" => 'Ten người dùng',
            "receiver_city" => 'Thành phố',
            "receiver_district" => 'Quận/Huyện',
            "receiver_commune" => 'Xã',
            "receiver_desc" => 'Chi tiet noi o',
            "receiver_type" => 'Loai dia chi noi o',
        ];
    }
}
