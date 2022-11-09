const clock = document.querySelector(".clock");
const hour = document.querySelector(".hour");
const minut = document.querySelector(".minut");
const second = document.querySelector(".second");
const digitalTime = document.querySelector(".digital-clock .time");
const date = document.querySelector(".digital-clock .date");
const switcherBtn = document.querySelector(".modeSwitch");
const dayNumber = document.querySelector(".date .dayNumber");

let timeNow;

setInterval(() => {
  timeNow = new Date();
  dynamicHour();
  dynamicMinut();
  dynamicSecond();
  dynamicDigitalTime();
  dynamicDate();
}, 1000);

switcherBtn.addEventListener("click", darkModeSwitch);

// ========================== functions ==================
function dynamicHour() {
  let hourNow = timeNow.getHours();
  if (hourNow > 12) {
    hourNow = hourNow - 12;
  }
  hour.style.cssText = `transform:rotate(${hourNow * 30}deg)`;
}

function dynamicMinut() {
  let minutNow = timeNow.getMinutes();
  minut.style.cssText = `transform:rotate(${minutNow * 6}deg)`;
}

function dynamicSecond() {
  let secondNow = timeNow.getSeconds();
  second.style.cssText = `transform:rotate(${secondNow * 6}deg)`;
}

function dynamicDigitalTime() {
  let hour = timeNow.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = timeNow.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let second = timeNow.getSeconds();
  if (second < 10) {
    second = `0${second}`;
  }
  let amOrPm;
  if (hour <= 12) {
    amOrPm = "AM";
  } else {
    amOrPm = "PM";
  }
  digitalTime.innerHTML = `${hour}:${minute}:${second} ${amOrPm}`;
}

function dynamicDate() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayName = date.querySelector(".dayName");
  const monthname = date.querySelector(".monthName");
  const dayNumber = date.querySelector(".dayNumber");

  dayName.innerText = `${days[timeNow.getDay() - 1].toUpperCase()},`;
  monthname.innerText = `${months[timeNow.getMonth()]
    .slice(0, 3)
    .toUpperCase()}`;
  dayNumber.innerText = `${timeNow.getDate()}`;
}

function darkModeSwitch() {
  document.body.classList.toggle("darkBg");
  switcherBtn.classList.toggle("active");
  clock.classList.toggle("active");
  hour.classList.toggle("active");
  minut.classList.toggle("active");
  digitalTime.classList.toggle("active");
  date.classList.toggle("active");
  dayNumber.classList.toggle("active");
  if (switcherBtn.classList.contains("active")) {
    switcherBtn.innerHTML = "Light Mode";
  } else {
    switcherBtn.innerHTML = "Dark Mode";
  }
}
