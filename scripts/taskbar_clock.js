// Calling taskbarTime function at every second
setInterval(taskbarTime, 1000);

// Defining taskbarTime funcion
function taskbarTime() {
    // Get current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let day = time.getDay();
    let month = time.getMonth();
    let year = 1999;
    // Set default to AM
    am_pm = "AM";

    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    /* If the hour/min/sec/day/month is less than 10 then we need to add a 0 
    at the start to make things a bit more readable */
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;

    /* Set currentTime variable as a concatination of every element we have */
    let currentTime =
        hour +
        ":" +
        min +
        ":" +
        sec +
        am_pm +
        " " +
        month +
        "/" +
        day +
        "/" +
        year;

    // Displaying the time (return currentTime)
    document.getElementById(
        "clock"
    ).innerHTML = currentTime;
}

// Call the function to run it.
taskbarTime();