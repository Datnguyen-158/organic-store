<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderDetailsRequest extends FormRequest
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
            "order_id" => 'required|numeric|exists:orders,order_id',
            "product_id" => 'required|numeric|exists:products,product_id',
            "orderDetail_quantity" => 'required|numeric',
            "orderDetail_total" => 'required|numeric',
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
            "order_id" => 'don hang',
            "product_id" => 'san pham',
            "orderDetail_quantity" => 'so luong',
            "orderDetail_total" => 'tien san pham',
        ];
    }
}
