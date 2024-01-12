<?php

namespace App\Http\Controllers\Api;

use App\Events\SendMessageEvent;
use App\Models\User;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\SendMessageRequest;
use App\Models\Chat;

class MessageController extends Controller
{
    use ApiResponse;
    public function send_message(SendMessageRequest $request)
    {
        $sender = auth()->user()->id;
        // $sender = 2;
        $recipient = $request->recipient_id;
        $message = $request->message;

        $chat = Chat::create([
            'sender_id' => $sender,
            'recipient_id' => $recipient,
            'message' => $message
        ]);
        SendMessageEvent::dispatch($sender, $recipient);

        // return $this->createResponse([], "Message sent!");

    }
}