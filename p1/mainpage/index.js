document.addEventListener('DOMContentLoaded', function() {
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;
    const numTexts = 15; // Number of texts to create

    function createFloatingText() {
        const textElement = document.createElement('div');
        const linkElement = document.createElement('a');
        textElement.textContent = ';';
        linkElement.href = 'https://casad078.github.io/core-interaction-2/p1/page1/'; 
        textElement.classList.add('floating-text');
        textElement.appendChild(linkElement); 
        document.body.appendChild(textElement);

        const textWidth = textElement.offsetWidth;
        const textHeight = textElement.offsetHeight;

        
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
            
            textElement.style.left = x + 'px';
            textElement.style.top = y + 'px';
        }

        // Set interval to move the text every 10 milliseconds
        setInterval(moveText, 40);
    }

    // Create multiple floating texts
    for (let i = 0; i < numTexts; i++) {
        createFloatingText();
    }
});