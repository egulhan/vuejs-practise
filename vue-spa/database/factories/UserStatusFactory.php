<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\UserStatus;
use Faker\Generator as Faker;

$factory->define(UserStatus::class, function (Faker $faker) {
    return [
        'user_id' => function () {
            return factory(\App\User::class)->create()->id;
        },
        'message' => $faker->text,
    ];
});
