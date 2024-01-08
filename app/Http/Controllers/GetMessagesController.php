<?php

namespace App\Http\Controllers;

use App\Http\Requests\GetMessageRequest;
use App\Models\Chat;
use App\Services\FetchMessageBySender;
use Illuminate\Http\Request;

class GetMessagesController extends Controller
{
    public function index(GetMessageRequest $request)
    {

        $fetcher = new FetchMessageBySender();
        $messages = $fetcher->fetchMessages($request->senderId);
        $sender = $fetcher->fetchSender($request->senderId);

        return response()->json([
            'status' => true,
            'sender' => $sender,
            'messages' => $messages,
        ], 200);
    }
}