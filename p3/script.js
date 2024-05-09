setInterval(showClock, 1000);
function showClock() {
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

function showTime() {
    const now = new Date();
    return now;
}

function updateDivColor() {
    const divs = document.querySelectorAll('.glow2, .glow3, .glow4, .glow5');
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
        div.style.opacity = 0; // Fully opaque during daytime
    } else {
        div.style.opacity = 1; // Partially transparent during nighttime
    }
}

// Update opacity every second
setInterval(updateDivOpacity, 1000);

// Initially update opacity
updateDivOpacity();


//little whisps
document.addEventListener("DOMContentLoaded", function() {
    animateDiv('.a');
    animateDiv('.b');
    animateDiv('.c');
    animateDiv('.d');
});

function makeNewPosition() {
    var h = window.innerHeight - 50;
    var w = window.innerWidth - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh, nw];    
}

function animateDiv(myclass) {
    var element = document.querySelector(myclass);
    var newPosition = makeNewPosition();
    var currentTop = parseInt(getComputedStyle(element).top);
    var currentLeft = parseInt(getComputedStyle(element).left);

    var distanceTop = newPosition[0] - currentTop;
    var distanceLeft = newPosition[1] - currentLeft;

    var start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        var percentage = Math.min(progress / 1000, 1); // 1000 milliseconds = 1 second
        var top = currentTop + distanceTop * percentage;
        var left = currentLeft + distanceLeft * percentage;
        element.style.top = top + 'px';
        element.style.left = left + 'px';
        if (percentage < 1) {
            window.requestAnimationFrame(step);
        } else {
            animateDiv(myclass);
        }
    }

    window.requestAnimationFrame(step);
}
