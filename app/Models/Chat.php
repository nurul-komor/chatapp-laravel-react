<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasUlids;
    use HasFactory;

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
        return time_formatter($time);
    }
}