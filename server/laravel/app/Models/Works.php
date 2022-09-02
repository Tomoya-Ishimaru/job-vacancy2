<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Works extends Model
{
    use HasFactory;

    protected $fillable = [
        'content','min_wage','max_wage','language',
        'url','image_name','company_id'];

    public function cmpany()
    {
        return $this->belongsTo(Company::class);
    }
}
