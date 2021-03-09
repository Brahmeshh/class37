class Player{
    constructor(){
        this.name=null;
        this.index=null;
        this.distance=0;
    }
    updateCount(count){
       var playerCountRef=dataBase.ref("/");
       playerCountRef.update({playerCount:count}); 
    }
    update(){
        var playerIndex="players/player"+this.index;
        dataBase.ref(playerIndex).set({name:this.name,distance:this.distance});
    }
    getCount(){
        var playerCountRef=dataBase.ref("playerCount");
        playerCountRef.on("value",function (data){
            playerCount=data.val();
        })
    }
   static getPlayerInfo(){
       var playerInfoRef=dataBase.ref("players");
       playerInfoRef.on("value",function (data){
           allPlayers=data.val();
       }) 
    }
}