<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Api\MessageController;
use App\Http\Controllers\Api\GetSendersController;
use App\Http\Controllers\Api\GetMessagesController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $auth = auth()->user();
    return Inertia::render('Dashboard', [
        'auth' => $auth
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    /**
     *
     * As application is only working with session based authentication,
     *
     *
     */
    Route::prefix('/api')->name('message.')->group(function () {
        Route::get('/senders', [GetSendersController::class, 'index']);
        /* -------------------------------------------------------------------------- */
        /*                               Handle Message                               */
        /* -------------------------------------------------------------------------- */
        // find messages of a sender
        Route::get('/messages', [GetMessagesController::class, 'index']);
        //    Send message
        Route::post('/message/send', [MessageController::class, 'send_message'])->name('send');
    });
});


require __DIR__ . '/auth.php';