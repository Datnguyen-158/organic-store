<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
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
   $category = $this->route()->category;
        $rules = [
            "product_name" => 'required|string|unique:products,product_name',
            "product_price" => 'required|numeric',
            "product_dsc" => 'required|string',
            "product_quantity" => 'required|numeric',
            "product_discount" => 'required|numeric',
        ];

        if(!$category){
            $rules["category_id"] = 'required|numeric|exists:categories,category_id';
        }
        return $rules;
    }
     public function messages(){
        return[
            "required" => ':attribute không được để trống',
            "unique" => ":attribute đã tồn tại",
        ];
    }

    public function attributes(){
        return [
            "product_name" => 'Tên sản phẩm',
            "product_price" => 'Giá sản phẩm',
            "product_dsc" => 'Mô tả sản phẩm',
            "category_id" => 'Nhóm sản phẩm',
            "product_quantity" => 'Số lượng sản phẩm',
            "product_discount" => 'giam gia',

        ];
    }
}
