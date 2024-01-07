<?php

namespace Database\Seeders;

use App\Models\Chat;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ChatTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i < 200; $i++) {
            // $sender = rand(3, 12);
            // $sender = rand(3, 12);
            $recipient = 11;
            $sender = rand($recipient - 2, $recipient - 1);
            Chat::create([
                'sender_id' => $sender,
                'recipient_id' => $recipient,
                'message' => fake()->text(),
            ]);
        }
    }
}