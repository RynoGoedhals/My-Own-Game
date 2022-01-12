var backgroundImg;
var player, playerImg, bottle, bottleImg;
var TITLE = 1;
var gameState = TITLE;
var start, game;
var bottle, bottleGroup;

let timer = 60;

var score = 0;

function preload(){

  backgroundImg = loadImage("./assets/bg.jpg");
  playerImg = loadImage("./assets/player.png");
  bottleImg = loadImage("./assets/bottle.png");

}

function setup() {
  createCanvas(800,400);

  start = new Start();
  game = new Game();
  bottleGroup = new Group();

}

function draw() {
  background(backgroundImg);

  if(gameState === TITLE){
    start.display();
    console.log("main screen");
  }

  if(gameState === 2){
    game.display();
  }

  drawSprites();

  if(gameState === 2){
    push();
    fill("black");
    textSize(20);
    text("Score: " +score, 650, 50);
    pop();

    text(timer, width/2 -25, 50);
  
    if (frameCount % 60 == 0 && timer > 0) {
      timer --;
    }
    if (timer == 0) {
      push();
      textSize(50);
      text("GAME OVER", 250, 150);
      pop();
      text("Your Score: " +score, 350, 200);

      bottleGroup.destroy();
    }
  }
}
