<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contacts extends Model
{
    use HasFactory;

    protected $fillable = 
    [
        'content','work_id','user_id'
    ];

    public function works()
    {
        return $this->belongsTo(Works::class);
    }

    public function users()
    {
        return $this->belongsTo(User::class);
    }
}
