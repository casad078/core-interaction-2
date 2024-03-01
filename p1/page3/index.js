var scrollInterval;
var isScrolling = false;

// Function to scroll the page automatically
function autoScroll() {
    var scrollSpeed = 5; // Adjust as needed
    var threshold = 5; // Adjust as needed
    scrollInterval = setInterval(function() {
        window.scrollBy(0, scrollSpeed);
        // Stop scrolling when reaching the bottom of the page
        if ((window.innerHeight + window.scrollY + threshold) >= document.body.offsetHeight) {
            clearInterval(scrollInterval);
        }
    }, 50); // Adjust scroll interval as needed
}

// Function to toggle scroll
function toggleScroll() {
    if (!isScrolling) {
        autoScroll();
        isScrolling = true;
    } else {
        clearInterval(scrollInterval);
        isScrolling = false;
    }
}



// semicolons
document.addEventListener('DOMContentLoaded', function() {
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;
    const numTexts = 3; // Number of texts to create
    let canSpawn = true; // Variable to control symbol spawning

    function createFloatingText() {
        const linkElement = document.createElement('a');
        linkElement.href = 'https://casad078.github.io/core-interaction-2/p1/page1/';
        linkElement.classList.add('floating-text');
        linkElement.textContent = ';'; // Set initial text content

        document.body.appendChild(linkElement);

        const textWidth = linkElement.offsetWidth;
        const textHeight = linkElement.offsetHeight;

        let x = Math.random() * (pageWidth - textWidth);
        let y = Math.random() * (pageHeight - textHeight);
        let dx = Math.random() * 4 - 2; // Random horizontal speed
        let dy = Math.random() * 4 - 2; // Random vertical speed

        function moveText() {
            x += dx;
            y += dy;

            if (x + textWidth > pageWidth || x < 0) {
                dx = -dx; // Reverse horizontal direction when hitting the sides
            }

            if (y + textHeight > pageHeight || y < 0) {
                dy = -dy; // Reverse vertical direction when hitting the top or bottom
            }

            linkElement.style.left = x + 'px';
            linkElement.style.top = y + 'px';
        }

        // Set interval to move the text every 50 milliseconds
        setInterval(moveText, 50);
    }

    // Function to spawn symbols periodically
    function spawnSymbols() {
        if (canSpawn) {
            for (let i = 0; i < numTexts; i++) {
                createFloatingText();
            }
            canSpawn = false; // Prevent spawning multiple symbols at once
            setTimeout(function() {
                canSpawn = true; // Allow spawning again after a delay
            }, 8000); // Adjust the delay (in milliseconds) as needed
        }
    }

    // Spawn symbols initially
    spawnSymbols();

    // Spawn symbols periodically
    setInterval(spawnSymbols, 5000); // Adjust the interval (in milliseconds) as needed
});
