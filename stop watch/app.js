var minute = 00;
var second = 00;
var milliSecond = 00;
var start_stop = document.getElementById('start_stop')
var clicked = false;
var stopHistory = [];


var getMinute = document.getElementById('minute')
var getSecond = document.getElementById('second')
var getMilliSecond = document.getElementById('milliSecond')


var a = document.getElementById('min')
var b = document.getElementById('sec')
var c = document.getElementById('milSec')

for (var i = 0; i < stopHistory.length; i++) {
    a.innerHTML = stopHistory[i].minute
    b.innerHTML = stopHistory[i].second
    c.innerHTML = stopHistory[i].milliSecond

}




var interval = "";
function timer() {
    milliSecond++;
    getMilliSecond.innerHTML = milliSecond;
    if (milliSecond === 100) {
        second++;
        getSecond.innerHTML = second;
        milliSecond = "00";
        getMilliSecond.innerHTML = milliSecond
    }
    else if (second === 10) {
        minute++;
        getMinute.innerHTML = minute
        second = "00";
        getSecond.innerHTML = second
    }
}


function start() {
    interval = setInterval(timer, 10)
}

function stop() {
    clearInterval(interval)
}


function toggle() {
    if (!clicked) {
        clicked = true
        start_stop.innerHTML = "Stop"
        start();
        return;
    }
    if (clicked) {
        clicked = false
        start_stop.innerHTML = "Start"
        stop();
        return;
    }

}


function reset() {
    clearInterval(interval)

    // history.push({ "minute": minute, "second": second, "milliSecond": milliSecond })
    stopHistory.push({ "minute": minute, "second": second, "milliSecond": milliSecond });
    console.log(stopHistory)


    milliSecond = "00";
    getMilliSecond.innerHTML = milliSecond;

    second = "00";
    getSecond.innerHTML = second;

    minute = "00";
    getMinute.innerHTML = minute

    clicked = false
    start_stop.innerHTML = "Start"

}

