<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Post extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'photo'];

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class,'category_post','post_id', 'category_id');
    }

}
