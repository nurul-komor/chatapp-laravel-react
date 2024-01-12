<?php

namespace App\Http\Controllers\Api;

use App\Models\Chat;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\FetchMessageBySender;
use App\Http\Requests\GetMessageRequest;

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