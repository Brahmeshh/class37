var dataBase;
var position;
var gameState=0;
var playerCount=0;
var form;
var game;
var player;
var allPlayers;

function setup(){
    createCanvas(500,500);
    dataBase=firebase.database();
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if (playerCount==4){
        game.updateState(1);
    }
    if (gameState===1){
        clear();
        game.play();
    }
}