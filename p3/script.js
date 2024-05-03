setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour =
        time.getHours();
    let min =
        time.getMinutes();
    am_pm = "am";

    if (hour >= 12) {
        if (hour > 12)
            hour -= 12;
        am_pm = "pm";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "am";
    }

    hour =
        hour < 10
            ? "0" + hour
            : hour;
    min =
        min < 10
            ? "0" + min
            : min;

    let currentTime =
        hour +
        ":" +
        min +
        am_pm;

    document.getElementById(
        "time"
    ).innerHTML =
        currentTime;
}
//not showing, fix

showTime();

function showTime() {
    const now = new Date();
    return now;
}

function updateDivColor() {
    const divs = document.querySelectorAll('.glow2, .glow3');
    const now = showTime();
    const currentHour = now.getHours();

    divs.forEach(div => {
        if (currentHour >= 4 && currentHour < 19) {
            div.style.backgroundColor = '#c5dff8'; // Blue color for daytime
        } else {
            div.style.backgroundColor = '#F1E4A5'; // Yellow color for nighttime
        }
    });
}

// Update color every second
setInterval(updateDivColor, 1000);



function updateDivOpacity() {
    const div = document.getElementById('glow');
    const now = new Date();
    const currentHour = now.getHours();

    // Adjust the current hour to fit within a 24-hour cycle
    const adjustedHour = (currentHour < 4) ? currentHour + 24 : currentHour;

    console.log("Current hour:", currentHour);
    console.log("Adjusted hour:", adjustedHour);

    if (adjustedHour >= 4 && adjustedHour < 19) {
        div.style.opacity = 0.3; // Fully opaque during daytime
    } else {
        div.style.opacity = 1; // Partially transparent during nighttime
    }
}

// Update opacity every second
setInterval(updateDivOpacity, 1000);

// Initially update opacity
updateDivOpacity();

