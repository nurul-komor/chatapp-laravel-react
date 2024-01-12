<?php

namespace App\Http\Controllers\Api;

use App\Models\Chat;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Services\FetchMessageSender;
use App\Http\Requests\GetSenderRequest;

class GetSendersController extends Controller
{
    public function index(GetSenderRequest $request)
    {

        $fetcher = new FetchMessageSender();
        $senders = $fetcher->fetch($request->recipientId);

        return response()->json([
            'status' => true,
            'senders' => $senders
        ]);
    }
}