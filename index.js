var originalBackgroundColor = document.body.style.backgroundColor;

document.getElementById('colorButton').addEventListener('click', function() {
  var body = document.body;
  if (body.style.backgroundColor === 'black') {
    // If background color is black, restore original background color
    body.style.backgroundColor = originalBackgroundColor;
    this.textContent = 'lights off';
  } else {
    // Change background color to black
    body.style.backgroundColor = 'black';
    this.textContent = 'lights on';
  }
});


//stars

const container = document.getElementById('container');
const generateButton = document.getElementById('generateButton');
const maxStars = 200;
let appearanceSpeed = 80; // Default appearance speed in milliseconds

// Function to generate a random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a star
function createStar() {
  const star = document.createElement('span');
  star.classList.add('star');
  star.textContent = '✦';
  star.style.left = getRandomNumber(0, window.innerWidth) + 'px';
  star.style.top = getRandomNumber(0, window.innerHeight) + 'px';
  container.appendChild(star);
}

// Function to generate stars one by one with a delay
function generateStars() {
  if (container.querySelectorAll('.star').length < maxStars) {
    createStar();
    setTimeout(generateStars, appearanceSpeed); // Adjust the appearance speed here
  } else {
    generateButton.disabled = true; // Disable the button after generating all stars
  }
}

// Event listener for the button click
generateButton.addEventListener('click', generateStars);