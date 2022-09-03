<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\WorksController;
use App\Http\Controllers\ContactsController;

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

Route::get('/dashboard', [ContactsController::class, 'index'])
->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('/contacts',ContactsController::class)
->middleware(['auth', 'verified']);


Route::prefix('company')->name('company.')->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Company/Dashboard');
    })->middleware(['auth:company', 'verified'])->name('dashboard');

    Route::get('/setting', function () {
        return Inertia::render('Company/Setting');
    })->middleware(['auth:company', 'verified'])->name('setting');

    Route::get('/contact', function () {
        return Inertia::render('Company/Contact');
    })->middleware(['auth:company', 'verified'])->name('contact');

    Route::resource('works', WorksController::class)
        ->middleware(['auth:company', 'verified']);
        
    require __DIR__ . '/company.php';
});

// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth'])->name('dashboard');

// Route::prefix('company')->name('company.')->group(function(){
//     require __DIR__.'/company.php';
// });

require __DIR__ . '/auth.php';
