<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\post;
use Inertia\Inertia;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::all();

        return Inertia::render('Post/Index', ['posts' => $posts]);


    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Post/Create',['categories' => $categories]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $post = new Post();
        $post->title = $request['title'];
        $post->description = $request['description'];


        $post->photo = $request->file('photo')->store('img');
        $post->save();

        return redirect('/post');

    }

    /**
     * Display the specified resource.
     */
    public function show(post $post): \Inertia\Response
    {
        return Inertia::render('Post/Show', ['post' => $post]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(post $post): \Inertia\Response
    {

        return Inertia::render('Post/Update', ['post' => $post]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, post $post)
    {

        $post->title = $request['title'];
        $post->description = $request['description'];

        $post->photo = $request->file('photo')->store('img');
        $post->save();

        return redirect('/post');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(post $post):void
    {
        dump($post);
        $post->delete();
    }
}
