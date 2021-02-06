var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){
  track=loadImage("../car/images/track.jpg");
  car1img= loadImage("../car/images/car1.png");
  car2img= loadImage("../car/images/car2.png");
  car3img= loadImage("../car/images/car3.png");
  car4img= loadImage("../car/images/car4.png");
  groundimg=loadImage("../car/images/ground.png");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
    textSize(25);
    fill("white");
    text("You Win",displayHeight/2,displayWidth/2);
  }
}
