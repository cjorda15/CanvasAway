var mainCanvas = document.querySelector("#myCanvas");
var mainContext = mainCanvas.getContext("2d");

var canvasWidth = mainCanvas.width;
var canvasHeight = mainCanvas.height;

var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;
var angle = 0;

function drawCircle() {
  mainContext.clearRect(0, 0, canvasWidth, canvasHeight);

     // color in the background
     mainContext.fillStyle = "black";
     mainContext.fillRect(0, 0, canvasWidth, canvasHeight);

     // draw the circle
     mainContext.beginPath();

     var radius = 90 + 150 * Math.abs(Math.cos(angle));
     mainContext.arc(canvasWidth/2, canvasHeight/2, radius, 0, Math.PI * 2, false);
     mainContext.closePath();

     // color in the circle
     mainContext.fillStyle = "#006699";
     mainContext.fill();
     angle += Math.PI / 64;



    //  mainContext.beginPath();
    //  mainContext.arc(canvasWidth/4, canvasHeight/4, 20, radius, Math.PI * 2, false);
    //  mainContext.closePath();
    //  mainContext.fillStyle = "red";
    //  mainContext.fill();

     mainContext.beginPath();
     mainContext.arc(canvasWidth/2, canvasHeight/2, radius/2, 0, Math.PI * 2, false);
     mainContext.closePath();
     mainContext.fillStyle = "purple";
     mainContext.fill();

     mainContext.beginPath();
     mainContext.arc(canvasWidth/2, canvasHeight/2, radius/4, 0, Math.PI * 2, false);
     mainContext.closePath();
     mainContext.fillStyle = "red";
     mainContext.fill();

     mainContext.beginPath();
     mainContext.arc(canvasWidth/2, canvasHeight/2, radius/10, 0, Math.PI * 2, false);
     mainContext.closePath();
     mainContext.fillStyle = "green";
     mainContext.fill();

     mainContext.beginPath();
     mainContext.arc(canvasWidth/2, canvasHeight/2, radius/30, 0, Math.PI * 2, false);
     mainContext.closePath();
     mainContext.fillStyle = "black";
     mainContext.fill();

     mainContext.beginPath();
     mainContext.arc(canvasWidth/2, canvasHeight/2, radius/50, 0, Math.PI * 2, false);
     mainContext.closePath();
     mainContext.fillStyle = "#006699";
     mainContext.fill();

     mainContext.beginPath();
     mainContext.arc(canvasWidth/2, canvasHeight/2, radius/80, 0, Math.PI * 2, false);
     mainContext.closePath();
     mainContext.fillStyle = "purple";
     mainContext.fill();

     mainContext.beginPath();
     mainContext.arc(canvasWidth/2, canvasHeight/2, radius/120, 0, Math.PI * 2, false);
     mainContext.closePath();
     mainContext.fillStyle = "red";
     mainContext.fill();

     requestAnimationFrame(drawCircle);

 }
drawCircle();
