<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;500;600;700&display=swap" rel="stylesheet">

        @vite('resources/js/app.js')
        @vite('resources/sass/app.scss')
    </head>
    <body class="antialiased">
        <div id="app">
            <header-component/>
        </div>
    </body>
</html>
