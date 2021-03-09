class Game{
   constructor()
   {}
    getState(){
        var gameStatePos=dataBase.ref("gameState");

        gameStatePos.on("value",function (data){
            gameState=data.val();
        });
        }
    async start(){
        if(gameState==0){
            form=new Form();
            player=new Player();
            var playerCountRef=await dataBase.ref("playerCount").once("value");
            if (playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount();
            } 
            form.display();
        }
    }
    updateState(state){
        var gameStatePos=dataBase.ref("/");
        gameStatePos.update({gameState:state});
    }
    play(){
        form.hide();
        textSize(30);
        text("GAME START",120,100);
        Player.getPlayerInfo();
        if(allPlayers!=undefined){
            var display_position=130;
            for (var plr in allPlayers){
                if (plr === "player" + player.index)
                    fill("red")       
            else
                    fill("black");

            display_position+=20;
            textSize(15);
            text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=50
            player.update();
          }
    }
    }