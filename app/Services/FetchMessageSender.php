<?php

namespace App\Services;

use App\Models\Chat;
use Illuminate\Support\Facades\DB;

class FetchMessageSender
{
    public function fetch($recipientId)
    {

        $query = DB::table('chats')->where('recipient_id', $recipientId)->distinct()->get()->pluck('sender_id');

        $senders = [];
        foreach ($query as $senderId) {
            $senders[$senderId] = Chat::where('sender_id', $senderId)->join('users', 'users.id', '=', 'sender_id')->select('chats.id', 'message', 'chats.created_at', 'name', 'sender_id')->latest()->first();
        }

        return $senders;
    }
}