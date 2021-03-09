class Form{
    constructor(){
        this.input=createInput("NAME");
        this.button=createButton("PLAY");
        this.greeting=createElement("h2");
    }
    display(){
        var title=createElement("h2");
        title.html("Multiplayer Racing Game");
        title.position(130,0);
        this.input.position(130,60);
        this.button.position(250,200);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            var name=this.input.value();
            playerCount=playerCount+1;
            player.name=name;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("HELLO "+name);
            this.greeting.position(130,160);

        })
    }
    hide(){
        this.button.hide();
        this.input.hide();
        this.greeting.hide();
    }
}