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