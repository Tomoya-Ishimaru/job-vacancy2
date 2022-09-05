<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class WorksRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'min_wage' => ['required','numeric','min:1000'],
            'max_wage' => ['required','numeric','min:1000'],
            'content' => ['required','max:100'],
            'language' => ['required','max:50'],
            'url' => ['required'],
        ];

    }
}
