<?php

namespace App\Services;

use App\Models\Chat;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class FetchMessageBySender
{
    public function fetchMessages($senderId): object
    {
        $messages = Chat::where('recipient_id', auth()->user()->id)->where('sender_id', $senderId)->latest()->paginate(100);
        return $messages;
    }

    public function fetchSender($senderId): object
    {
        $sender = User::find($senderId);
        return $sender;
    }
}
