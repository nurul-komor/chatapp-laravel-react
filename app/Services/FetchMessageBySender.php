<?php

namespace App\Services;

use App\Models\Chat;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class FetchMessageBySender
{
    public function fetchMessages($senderId): object
    {

        // Getting messages where recipient id == $senderId or recipient_id = logged user id

        $messages = Chat::whereIn('recipient_id', [auth()->user()->id, $senderId])->whereIn('sender_id', [auth()->user()->id, $senderId])
            ->latest()
            ->paginate(200);

        return $messages;
    }

    public function fetchSender($senderId): object
    {
        $sender = User::find($senderId);
        return $sender;
    }
}