const year = document.getElementById('year');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
let currentYear = new Date().getFullYear();
let nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);
year.innerText = currentYear;

function updateCount() {
    let currentTime = new Date();
    let diff = nextYear - currentTime;
    let daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    let hourseLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    let minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    let secondsLeft = Math.floor(diff / 1000) % 60;
    days.innerText = daysLeft;
    hours.innerIext = hourseLeft < 10 ? '0' + hourseLeft : hourseLeft;
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}
updateCount();
setInterval(updateCount, 1000);