let seconds = 00;
let tens = 00;
let Seconds1 = document.getElementById('seconds');
let Tens1 = document.getElementById('tens');
let ButtonStart = document.getElementById('btn-start');
let ButtonStop = document.getElementById('btn-stop');
let ButtonReset = document.getElementById('btn-reset');
let interval;

function MyFunction() {

    tens++;

    if (tens < 9) {
        Tens1.innerHTML = "0" + tens;
    }
    if (tens > 9)
        Tens1.innerHTML = tens;
}
if (tens > 99) {
    seconds++;
    Seconds1.innerHTML = "0" + seconds;
    tens = 0;
    Tens1.innerHTML = "0" + 0;
}
if (seconds > 9) {
    Seconds1.innerHTML = seconds;
}
ButtonStart.onclick = function () {
    interval = setInterval(MyFunction);

}
ButtonStop.onclick = function () {
    clearInterval(interval);
}
ButtonReset.onclick = function () {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    Seconds1.innerHTML = seconds;
    Tens1.innerHTML = tens;
}
