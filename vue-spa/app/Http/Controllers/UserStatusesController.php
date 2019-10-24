<?php

namespace App\Http\Controllers;

use App\User;
use App\UserStatus;
use Illuminate\Http\Request;

class UserStatusesController extends Controller
{
    public function index()
    {
        return UserStatus::with('user')->latest()->get();
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'message' => 'required',
        ]);

        $user = User::find(1);
        $status = $user->statuses()->create($request->only(['message']));

        return $status->load('user');
    }
}
