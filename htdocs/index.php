<!doctype html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Onboarding</title>
    <link href="http://onboarding-partout.localhost/dist/app.css" rel="stylesheet">
</head>

<style>
    body {
        /*background-color: #4ace00;*/
    }
</style>
<body>
<div id="app">
    <navbar></navbar>

    <transition
            name="fade"
            mode="out-in"
    >
    <router-view></router-view>
    </transition>
</div>
<script src="/dist/runtime.js"></script>
<script src="/dist/app.js"></script>

<script>
</script>

</body>
</html>