<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CartRequest extends FormRequest
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
            "user_id" => 'required|numeric|exists:users,user_id',
            "product_id" => 'required|numeric|exists:products,product_id',
            "cart_quantity" => 'required|numeric',
            // "cart_totalmoney" => 'required|numeric',
        ];
    }


    public function messages(){
        return[
            "required" => ':attribute không được để trống',
            "exists" => ":attribute không tồn tại",
        ];
    }

    public function attributes(){
        return [
            "user_id" => 'tên user',
            "product_id" => 'ten san pham',
            "cart_quantity" => 'số lượng',
            // "cart_totalmoney" => 'tổng tiền',
        ];
    }
}
