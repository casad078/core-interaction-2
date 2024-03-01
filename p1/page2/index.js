
var span = document.getElementById('changeColor');

var originalBackgroundColor = document.body.style.backgroundColor;
var originalTextColor = document.body.style.color;

var isBlackRed = false;

function changeColors() {
  if (!isBlackRed) {

    document.body.style.backgroundColor = 'black';

    document.body.style.color = 'red';

  } else {

    document.body.style.backgroundColor = originalBackgroundColor;

    document.body.style.color = originalTextColor;
  }

  isBlackRed = !isBlackRed;
}

span.addEventListener('click', changeColors);





;(function(){

    var msg = "; ; ; ; ; ; ; ; ; ; ; ; ;";
    
    var size = 100;
    
    var circleY = 2; var circleX = 3;
    
    var letter_spacing = 4;
    
    var diameter = 2;
    
    var rotation = 0.2;
    
    var speed = 0.5;
    
    
    if (!window.addEventListener && !window.attachEvent || !document.createElement) return;
    
    msg = msg.split('');
    var n = msg.length - 1, a = Math.round(size * diameter * 0.20), currStep = 20,
    
    ymouse = a * circleY + 20, xmouse = a * circleX + 20, y = [], x = [], Y = [], X = [],
    
    o = document.createElement('div'), oi = document.createElement('div'),
    
    b = document.compatMode && document.compatMode != "BackCompat"? document.documentElement : document.body,
    
    mouse = function(e){
    
     e = e || window.event;
     ymouse = !isNaN(e.pageY)? e.pageY : e.clientY; 
     xmouse = !isNaN(e.pageX)? e.pageX : e.clientX; 
    
    },
    
    makecircle = function(){ 
    
     if(init.nopy){
    
      o.style.top = (b || document.body).scrollTop + 'px';
      o.style.left = (b || document.body).scrollLeft + 'px';
    
     };
    
     currStep -= rotation;
    
     for (var d, i = n; i > -1; --i){ 
    
      d = document.getElementById('iemsg' + i).style;
      d.top = Math.round(y[i] + a * Math.sin((currStep + i) / letter_spacing) * circleY - 15) + 'px';
      d.left = Math.round(x[i] + a * Math.cos((currStep + i) / letter_spacing) * circleX) + 'px';
    
     };
    
    },
 
    drag = function(){ 
    
      y[0] = Y[0] += (ymouse - Y[0]) * speed;
     x[0] = X[0] += (xmouse - 20 - X[0]) * speed;
     for (var i = n; i > 0; --i){
      y[i] = Y[i] += (y[i-1] - Y[i]) * speed;
      x[i] = X[i] += (x[i-1] - X[i]) * speed;
     };
    
     makecircle();
    
    },
    
    init = function(){ 
    
     if(!isNaN(window.pageYOffset)){
    
      ymouse += window.pageYOffset;
      xmouse += window.pageXOffset;
    
     } else init.nopy = true;
    
     for (var d, i = n; i > -1; --i){
    
      d = document.createElement('div'); d.id = 'iemsg' + i;
      d.style.height = d.style.width = a + 'px';
      d.appendChild(document.createTextNode(msg[i]));
      oi.appendChild(d); y[i] = x[i] = Y[i] = X[i] = 0;
    
     };
    
     o.appendChild(oi); document.body.appendChild(o);
    
     setInterval(drag, 25);
    
    },
    
    ascroll = function(){
    
     ymouse += window.pageYOffset;
     xmouse += window.pageXOffset;
     window.removeEventListener('scroll', ascroll, false);
    
    };
    
    o.id = 'outerCircleText'; o.style.fontSize = size + 'px';
    
    if (window.addEventListener){
    
     window.addEventListener('load', init, false);
     document.addEventListener('mouseover', mouse, false);
     document.addEventListener('mousemove', mouse, false);
      if (/Apple/.test(navigator.vendor))
       window.addEventListener('scroll', ascroll, false);
    
    }
    
    else if (window.attachEvent){
    
     window.attachEvent('onload', init);
     document.attachEvent('onmousemove', mouse);
    
    };
    
    })();






document.addEventListener('DOMContentLoaded', function() {
  var clickableWord = document.getElementById('changeColor');
  var marqueeContainer = document.getElementById('marquees-container');
  
  // Initially hide the marqueeContainer
  marqueeContainer.classList.add('hidden');

  clickableWord.addEventListener('click', function() {
    // Toggle the visibility of the marqueeContainer
    marqueeContainer.classList.toggle('hidden');
  });
});
