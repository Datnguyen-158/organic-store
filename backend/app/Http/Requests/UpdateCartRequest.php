<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
class UpdateCartRequest extends FormRequest
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
         $cart = $this->route()->cart;
        return [
            "user_id" => [
                "required",
                "numeric",
                Rule::exists('users','user_id'),
            ],
            "product_id" => [
                "required",
                "numeric",
                Rule::exists('products','product_id'),
            ],
            "cart_quantity" => 'required|numeric',
            "cart_totalmoney" => 'required|numeric',
        ];
    }
}
