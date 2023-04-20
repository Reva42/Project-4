
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
 document.querySelector('.currentTime').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();

const today = new Date();
const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
const currentWeek = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);

document.getElementById("week-number").textContent = currentWeek;

// Get the current date
const currentDate = new Date();
// Get the first day of the current week (Sunday)
const firstDayOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));
// Create an array with the dates of the current week
const dates = [];
for (let i = 0; i < 7; i++) {
  const date = new Date(firstDayOfWeek.getTime() + (i * 24 * 60 * 60 * 1000));
  dates.push(date.toLocaleDateString("en-US", { month: "short", day: "numeric" }));
}

// Set the dates in the calendar
const dateHeaders = document.querySelectorAll(".date-header");
for (let i = 0; i < dateHeaders.length; i++) {
  const weekdayDiv = dateHeaders[i].querySelector(".weekday");
  const dateDiv = dateHeaders[i].querySelector(".date");
  weekdayDiv.textContent = dates[i].split(" ")[0];
  dateDiv.textContent = dates[i].split(" ")[1];
}

