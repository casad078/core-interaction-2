var originalBackgroundColor = document.body.style.backgroundColor;

document.getElementById('colorButton').addEventListener('click', function() {
  var body = document.body;
  if (body.style.backgroundColor === 'black') {
   
    body.style.backgroundColor = originalBackgroundColor;
    this.textContent = 'lights off';
  } else {

    body.style.backgroundColor = 'black';
    this.textContent = 'lights on';
  }
});


//stars

const container = document.getElementById('container');
const generateButton = document.getElementById('generateButton');
const maxStars = 200;
let appearanceSpeed = 80; // Default appearance speed in milliseconds


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function createStar() {
  const star = document.createElement('span');
  star.classList.add('star');
  star.textContent = '✦';
  star.style.left = getRandomNumber(0, window.innerWidth) + 'px';
  star.style.top = getRandomNumber(0, window.innerHeight) + 'px';
  container.appendChild(star);
}


function generateStars() {
  if (container.querySelectorAll('.star').length < maxStars) {
    createStar();
    setTimeout(generateStars, appearanceSpeed); // Adjust the appearance speed here
  } else {
    generateButton.disabled = true; // Disable the button after generating all stars
  }
}


generateButton.addEventListener('click', generateStars);