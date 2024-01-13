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
        for ($i = 1; $i <= 2; $i++) {
            // to get message
            $recipient = 2;
            // $sender = $recipient + rand(1, 20);

            // for sending message
            $sender = 4;
            // $recipient = $sender + rand(1, 20);
            Chat::create([
                'sender_id' => $sender,
                'recipient_id' => $recipient,
                'message' => fake()->text() . $i,
            ]);
        }
    }
}