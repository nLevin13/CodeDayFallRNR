//https://rnr-realronakshah.c9users.io/Game/index.html
let canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let ctx = canvas.getContext("2d");



function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRect(0,0,1500,900,"red", true)

    
    drawCastle()
    requestAnimationFrame(draw);
}

function drawCastle(leftX, leftY) {
    drawRect(leftX, leftY, 10, 10, "blue", true, 0)
}
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

// // utility functions
function drawRect(x, y, w, h, color, filled, strokeWidth) {
  ctx.lineWidth = strokeWidth;
  if (filled) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  } else {
    ctx.strokeStyle = color;
    ctx.strokeRect(x, y, w, h);
  }
}
function drawPolygon(x, y, n, sideWidth, color, filled, strokeWidth) {
  ctx.lineWidth = strokeWidth;
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  var interiorAngleSum = (n - 2) * 180;
  var interiorAngle = interiorAngleSum / n;
  interiorAngle = Math.PI * (interiorAngle / 180); //convert to radians

  ctx.moveTo(x + sideWidth * Math.cos(0), y);
  var startAngle = 0;

  for (var j = 1; j < n + 1; j++) {
    ctx.lineTo(
      x + sideWidth * Math.cos(startAngle),
      y + sideWidth * Math.sin(startAngle)
    );

    startAngle += interiorAngle;
  }
  if (filled) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
  ctx.closePath();
}
function drawCircle(x, y, radius, color, filled, strokeWidth) {
  ctx.lineWidth = strokeWidth;
  if (filled) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  } else {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.closePath();
  }
}

// // calling everything
draw();
