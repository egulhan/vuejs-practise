<?php

namespace App\Http\Controllers;

use App\UserStatus;
use Illuminate\Http\Request;

class UserStatusesController extends Controller
{
    public function index()
    {
        return UserStatus::with('user')->get();
    }
}
