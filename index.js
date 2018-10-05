window.onload = init;

var ballRadius = 20;
var canvas = null;
var canvasContext = null;
var canvasPosition = null;
var x = null;
var y = null;
var dy = 2;
var dx = 2;
var mouseX = null;
var mouseY = null;

function init() {
     canvas = document.querySelector('canvas');
     canvasContext = canvas.getContext("2d");
     canvas.addEventListener("mousemove", setMousePosition, false);
     canvasPosition = getPosition(canvas);
     setInterval(draw, 10);
}


function drawCircle(context) {
    context.beginPath();
    context.arc(mouseX, mouseY, 40, 0, 2 * Math.PI, true);
    context.fillStyle = "#F7F742";
    context.fill();
    context.closePath();
}
 
function setMousePosition(e) {
    mouseX = e.clientX - canvasPosition.x;
    mouseY = e.clientY - canvasPosition.y;
}  

function draw() {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(canvasContext);
    requestAnimationFrame(draw);
}

function getPosition(el) {
    var xPosition = 0;
    var yPosition = 0;
   
    while (el) {
      xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
      el = el.offsetParent;
    }
    return {
      x: xPosition,
      y: yPosition
    };
  }   