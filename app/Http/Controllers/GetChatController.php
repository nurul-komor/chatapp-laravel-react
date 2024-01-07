<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GetChatController extends Controller
{
    public function index(Request $request)
    {
        $chats = DB::table('chats')->where('recipient_id', $request->recipientId)->select('chats.id', 'message', 'chats.created_at', 'name')->join('users', 'users.id', '=', 'sender_id')->get()->groupBy('sender_id');
        return response()->json([
            'status' => true,
            'chats' => $chats
        ]);
    }
}