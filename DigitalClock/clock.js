function updateTime() {
  // Current Date
  var currentTime = new Date();
  var day = currentTime.getDay();
  var date = currentTime.getDate();
  var month = currentTime.getMonth();
  var year = currentTime.getFullYear();

  // Current Time
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  const day_arr = [
    "Sunday",
    "Monday",
    "TuesDay",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month_arr = [
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

  if (hours >= 12) {
    document.getElementById("time").innerHTML =
      hours + ":" + minutes + ":" + seconds + " PM";
  } else {
    document.getElementById("time").innerHTML =
      hours + ":" + minutes + ":" + seconds + " AM";
  }

  if ((date - 1) % 10 == 0) {
    document.getElementById("date").innerHTML =
      day_arr[day] + ", " + month_arr[month] + " " + date + "st " + year;
  } else if ((date - 2) % 10 == 0) {
    document.getElementById("date").innerHTML =
      day_arr[day] + ", " + month_arr[month] + " " + date + "nd " + year;
  } else if ((date - 3) % 10 == 0) {
    document.getElementById("date").innerHTML =
      day_arr[day] + ", " + month_arr[month] + " " + date + "rd " + year;
  } else {
    document.getElementById("date").innerHTML =
      day_arr[day] + ", " + month_arr[month] + " " + date + "th " + year;
  }
}

setInterval(updateTime, 1000); // 1000 miliseconds
