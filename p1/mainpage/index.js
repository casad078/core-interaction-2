document.addEventListener('DOMContentLoaded', function() {
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;
    const numTexts = 30; // Number of texts to create

    function createFloatingText() {
        const linkElement = document.createElement('a');
        linkElement.textContent = ';'; // Set your desired link text here
        linkElement.href = 'https://casad078.github.io/core-interaction-2/p1/page1/'; 
        linkElement.classList.add('floating-text');

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

        // Set interval to move the text every 10 milliseconds
        setInterval(moveText, 50);
    }

    // Create multiple floating texts
    for (let i = 0; i < numTexts; i++) {
        createFloatingText();
    }
});