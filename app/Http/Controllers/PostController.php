<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\post;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $posts = Post::with('categories')->get();

        return Inertia::render('Post/Index',compact('posts'));


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
    public function store(Request $request):RedirectResponse
    {

        $post = new Post();
        $post->title = $request['title'];
        $post->description = $request['description'];


        $post->photo = $request->file('photo')->store('img');

        $post->save();

        $post->categories()->sync($request['category']);

        return redirect('/post');

    }

    /**
     * Display the specified resource.
     */
    public function show(post $post): \Inertia\Response
    {
        $post->categories;
        return Inertia::render('Post/Show', ['post' => $post]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(post $post): \Inertia\Response
    {
        $post->categories;
        $categories = Category::all();
        return Inertia::render('Post/Update', ['post' => $post,'categories' => $categories]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, post $post)
    {

        $post->title = $request['title'];

        $post->description = $request['description'];
        if($request->file('photo'))
        $post->photo = $request->file('photo')->store('img');

        $post->save();

        $post->categories()->sync($request['category']);

        return redirect('/post');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(post $post):RedirectResponse
    {
        $post->categories();
        $post->delete();

        return redirect('/post');

    }
}
