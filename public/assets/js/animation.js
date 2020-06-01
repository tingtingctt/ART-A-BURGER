var ctx;
var imgDrops;
var imgBg;
var x = 0;
var y = 0;
var noOfDrops = 10;
var fallingDrops = [];
var canvas = document.querySelector("canvas");


function drawBackground() {
    ctx.drawImage(imgBg, 0, 0, window.innerWidth, window.innerHeight); //Background
  }

function draw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    drawBackground();
    for (var i=0; i< noOfDrops; i++){
        ctx.drawImage (fallingDrops[i].image, fallingDrops[i].x, fallingDrops[i].y); //The rain drop
        fallingDrops[i].y += fallingDrops[i].speed; //Set the falling speed
        if (fallingDrops[i].y > window.innerHeight + 70) {  //Repeat the raindrop when it falls out of view
            fallingDrops[i].y = -70 //Account for the image size
            fallingDrops[i].x = Math.random() * window.innerWidth;    //Make it appear randomly along the width    
        }
    }
}


function setup() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');

        imgBg = new Image();
        imgBg.width = window.innerWidth;
        imgBg.src = "/assets/image/devour.png";

        setInterval(draw, 36);

        for (var i = 0; i < noOfDrops; i++) {
            var fallingDr = new Object();
            fallingDr["image"] =  new Image();
            fallingDr.image.src = '/assets/image/burger.png';
            fallingDr["x"] = Math.random() * window.innerWidth;
            fallingDr["y"] = Math.random() * 5;
            fallingDr["speed"] = 3 + Math.random() * 5;
            fallingDrops.push(fallingDr);
        }
    }  
}




setup();
