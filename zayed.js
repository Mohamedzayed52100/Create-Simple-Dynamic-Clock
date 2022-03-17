window.onload = function() {
    setInterval(function() {
        var now = new Date(),
            hours = now.getHours(),
            minutes = now.getMinutes(),
            seconds = now.getSeconds();
        var mydiv = document.getElementById('div');
        mydiv.innerHTML = hours + ':' + minutes + ':' + seconds;
    }, 500);
}