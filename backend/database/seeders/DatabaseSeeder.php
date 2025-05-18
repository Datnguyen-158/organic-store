<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::insert([
        //     [
        //         'user_name' => 'User1',
        //         'user_password' => bcrypt('123456'),
        //         'user_email' => 'test@example.com',
        //         'user_role' => '1',
        //     ],
        //     [
        //         'user_name' => 'User2',
        //         'user_password' => bcrypt('123456'),
        //         'user_email' => 'testttt@example.com',
        //         'user_role' => '0',
        //     ],
        // ]



        // );
                Category::insert([
                    ['category_name'=>'Tráo cây'],
                    ['category_name'=>'Rau củ'],
                    ['category_name'=>'Thịt tươi'],
                ]);
    }
}
