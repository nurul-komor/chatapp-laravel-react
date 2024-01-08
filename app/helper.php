<?php

// Setting time zone

date_default_timezone_set("Asia/Dhaka");

// Get Difference of time between to parameters
if (!function_exists('time_formatter')) {
    function time_formatter($time, $type)
    {
        $now = new DateTime();
        $created_at = new DateTime($time);
        $different = $now->diff($created_at);

        switch ($different) {
            case $different->y > 0:
                return $different . " years ago";

            case $different->m > 0:
                return $different . " months ago";

            case $different->d > 0:
                return $different->d . " days ago";
            case $different->h > 0:
                if ($type == 'short') {
                    return $different->h . " hours ago";
                } else {
                    return $different->h . " hours " . $different->i . " minutes ago";
                }
            case $different->i > 0:
                if ($type == 'short') {
                    return $different->i . " minutes ago";
                } else {
                    return $different->i . " minutes " . $different->s . " seconds ago";
                }

            case $different->s > 0:
                return $different->s . " seconds ago";
            default:
                return "less than second ago";
            // break;
        }
    }
}