<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories')->insert([
            'name' => 'Fantasy',
        ]);

        DB::table('categories')->insert([
            'name' => 'Adventures',
        ]);

        DB::table('categories')->insert([
            'name' => 'Drama',
        ]);

        DB::table('categories')->insert([
            'name' => 'Comics',
        ]);
    }
}
