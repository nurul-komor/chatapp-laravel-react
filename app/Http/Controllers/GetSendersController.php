<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GetSendersController extends Controller
{
    public function index(Request $request)
    {
        // $chats = DB::table('chats')->where('recipient_id', $request->recipientId)->select('chats.id', 'message', 'chats.created_at', 'name', 'sender_id')->join('users', 'users.id', '=', 'sender_id')->get()->groupBy('sender_id');
        $query = DB::table('chats')->where('recipient_id', $request->recipientId)->distinct()->get()->pluck('sender_id');

        $senders = [];
        foreach ($query as $senderId) {
            $senders[$senderId] = Chat::where('sender_id', $senderId)->join('users', 'users.id', '=', 'sender_id')->select('chats.id', 'message', 'chats.created_at', 'name', 'sender_id')->latest()->first();
        }
        return response()->json([
            'status' => true,
            // 'chats' => $chats
            'senders' => $senders
        ]);
    }
}