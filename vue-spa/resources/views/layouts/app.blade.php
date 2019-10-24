<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Vue SPA</title>

    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
<div id="root">

    @include('layouts.header')

    <div class="section">
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</div>

<script src="/js/app.js"></script>
</body>
</html>
