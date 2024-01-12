<?php

namespace App\Models;

use App\Events\SendMessageEvent;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasUlids;
    use HasFactory;
    protected $fillable = [
        "sender_id",
        "recipient_id",
        "message",
        "read_at"
    ];
    /**
     * Call Event on every crud operation
     *
     */
    protected $dispatchesEvent = [
        // 'created' => SendMessageEvent::class,
        'updated' => SendMessageEvent::class,
        'deleted' => SendMessageEvent::class,
        // 'created' => SendMessageEvent::class,
    ];
    public function sender()
    {
        return $this->hasOne(User::class, 'sender_id', 'id');
    }
    public function recipient()
    {
        return $this->hasOne(User::class, 'recipient_id', 'id');
    }

    public function getCreatedAtAttribute($time)
    {
        return time_formatter($time, 'short');
    }
}