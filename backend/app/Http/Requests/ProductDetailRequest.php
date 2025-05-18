<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductDetailRequest extends FormRequest
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
     public function rules()
    {
        return [
            'productDetail_image'   => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'productDetail_desc'    => 'nullable|string|max:1000',
            'productDetail_content' => 'nullable|string',
            'product_id'            => 'required|exists:products,product_id',
        ];
    }

    public function messages()
    {
        return [
            'productDetail_image.image' => 'File phải là ảnh.',
            'productDetail_image.mimes' => 'Ảnh phải có định dạng: jpg, jpeg, png hoặc webp.',
            'productDetail_image.max'   => 'Ảnh không được lớn hơn 2MB.',
            'product_id.required'       => 'Sản phẩm là bắt buộc.',
            'product_id.exists'         => 'Sản phẩm không tồn tại.',
        ];
    }
}
