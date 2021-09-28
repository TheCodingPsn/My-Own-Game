var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;//array to store all the players information

var coinImg, bucketImg, bgImg
var coins, coinG;

var player1,player2,players;

var player, form,game;

function preload(){
coinImg = loadImage("images/Coin.png")
bucketImg = loadImage("images/Bucket.png")
bgImg = loadImage("images/background.png")

coinG = new Group();
}





function setup() {
  createCanvas(1000, 800);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {

  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}