<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;

class PageController extends Controller
{
    function index() {

        $posts = Post::all();

        return Inertia::render('Page/Index', ['posts' => $posts]);
    }

    function show(int $id) {

        $post = Post::find($id);

        return Inertia::render('Page/Show', ['post' => $post]);

    }
}
