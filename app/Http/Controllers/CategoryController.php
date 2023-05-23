<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\post;
use Inertia\Inertia;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::all();

        return Inertia::render('Category/Index', ['categories' => $categories]);


    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Category/Create');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $Category = new Category();
        $Category->name = $request['category'];
        $Category->save();

        return redirect('/Category');

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
    public function edit(Category $category): \Inertia\Response
    {

        return Inertia::render('Category/Update', ['category' => $category]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {

        $category->name = $request['name'];

        $category->save();

        return redirect('/category');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category):void
    {
        $category->delete();
    }
}
