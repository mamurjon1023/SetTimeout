let hour = document.querySelector(".hours");
let minute = document.querySelector(".minutes");
let second = document.querySelector(".seconds");

setInterval(function () {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hour.textContent = hours;
    minute.textContent = minutes;
    second.textContent = seconds;
}, 1000)