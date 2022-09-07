const playBtn = document.querySelector(".play-btn");

const undoBtn = document.querySelector(".undo-btn");

// Variables for Time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for Leading Zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for timerStatus and timerInterval

let timerStatus = "stopped";
let timerInterval = null;

// Stop-Watch Function

function stopWatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }

  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }

  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }

  let timer = (document.querySelector(".timer").innerHTML =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds);
}

playBtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1);

    document.querySelector(
      ".play-btn"
    ).innerHTML = `<i class="fa fa-pause" id="pause"></i>`;
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);

    document.querySelector(
      ".play-btn"
    ).innerHTML = `<i class="fa fa-play" id="play"></i>`;
    timerStatus = "stopped";
  }
});

undoBtn.addEventListener("click", function () {
  document.querySelector(".timer").innerHTML = "00:00:00";
});
