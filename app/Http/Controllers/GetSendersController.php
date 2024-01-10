<?php

namespace App\Http\Controllers;

use App\Http\Requests\GetSenderRequest;
use App\Models\Chat;
use App\Models\User;
use App\Services\FetchMessageSender;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
