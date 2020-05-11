let minutes = 0;
let seconds = 0;
let tens = 0;
let appendMinutes = document.getElementById("minutes");
let appendSeconds = document.getElementById("seconds")
let appendTens = document.getElementById("tens")
let buttonStart = document.getElementById("button-start");
let buttonStop = document.getElementById("button-stop");
let buttonReset = document.getElementById("button-reset");
let interval;

buttonStart.onclick = function() {
    clearInterval(interval)
    interval = setInterval(startTimer, 100)
}

buttonStop.onclick = function() {
    clearInterval(interval)
}

buttonReset.onclick = function() {
    clearInterval(interval)
    minutes = '00'
    seconds = '00'
    tens = '00'
    appendMinutes.innerHTML = minutes;
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
}

function startTimer() {
    tens++
    if(tens < 9 ) {
        appendTens.innerHTML = "0" + tens;
    }

    if(tens > 9 ) {
        appendTens.innerHTML = tens;
    }

    if(seconds < 9) {
        appendSeconds.innerHTML = "0" + seconds;
    }
    if(tens > 60 ) {
        seconds++;
        appendSeconds.innerHTML = 0 + seconds;
        tens = 0;
        appendTens.innerHTML = 0;
    }

    if(seconds > 60 ){
        minutes++;
        appendMinutes.innerHTML = minutes;
        seconds = 0;
        appendSeconds.innerHTML = 0
    }
    // if(seconds > 9) {
    //     appendSeconds.innerHTML = seconds;
    // }

}