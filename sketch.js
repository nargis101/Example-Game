var ballImg, button, ballGroup;
var playIcon, play;

var START = 0;
var PLAY = 1;
var gameState = START;

function preload(){
    ballImg = loadImage("images/ball.png");
    playIcon = loadImage("images/play.png");
}

function setup(){
    createCanvas(500, 500);

    play = createSprite(250, 250, 20, 20);
    play.addImage("play icon", playIcon);
    play.scale = 0.1;

    

    //create a ball group
    ballGroup = new Group();
}

function draw(){
    background("pink");

    if(gameState === START && mousePressedOver(play)){
        gameState = PLAY;
        play.visible = false;
    }


    if(gameState === PLAY){
        background("lightblue");
        spawnBalls();
    }

    //THE FUNCTION TO PRESS BALL AND DESTROY EACH
    //if(gameState === PLAY && mousePressedOver(ballGroup)){
        //ballGroup.destroyEach();
    //}

    drawSprites();
}


//function to spawn the balls
function spawnBalls(){
    if(frameCount % 70 === 0){
        ball = createSprite(200, 520, 20, 20);
        ball.addImage("ball", ballImg);
        ball.scale = 0.15;
        
        //giving the ball it's velocity and random 'x' position value
        ball.x = Math.round(random(50, 450));
        ball.velocityY = -1.5;

        //giving it a lifetime and adding it to a group
        ball.lifetime = 400;
        ballGroup.add(ball);
    }
}