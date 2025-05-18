<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateReceiver extends FormRequest
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
        $receiver = $this->route()->receiver;
         return [
            "receiver_phone" =>[
                'required',
                'string',
                Rule::unique('receiver','receiver_phone')->ignore($receiver->receiver_id,'receiver_id')
            ],
            "user_id" => [
                'required',
                'numeric',
                Rule::exists('users','user_id')
            ],
            "receiver_city" => 'required|string',
            "receiver_district" => 'required|string',
            "receiver_commune" => 'required|string',
            "receiver_desc" => 'required|string',
            "receiver_type" => 'required|int',
        ];
    }
}
