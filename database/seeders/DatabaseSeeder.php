<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;
use Database\Seeders\ChatTableSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        if (User::count() < 1) {

            User::create([
                'name' => fake()->name(),
                'email' => 'user@gmail.com',
                'password' => bcrypt('password'),
            ]);
            User::create([
                'name' => fake()->name(),
                'email' => 'user1@gmail.com',
                'password' => bcrypt('password'),
            ]);
            \App\Models\User::factory()->create([
                'name' => 'Test User',
                'email' => 'test@example.com',
            ]);
        }

        \App\Models\User::factory(100)->create();

        $this->call([
            ChatTableSeeder::class
        ]);
    }
}
