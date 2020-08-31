class Game {
  constructor(){}
  
  play(){
    form.hide();
    textSize(20);
    text("Game Start", 200,150);
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
      var displayPosition = 150;
      for(var p in allPlayers){
        if(p === "player" + player.index){
          fill("red");
        }
        else{
          fill("black");
        }
      
        displayPosition += 20;
        text(allPlayers[p].name + " : " + allPlayers[p].distance,100,displayPosition);
      }
    }

    if(keyDown (UP_ARROW) && player.index !== null){
      player.distance += 30;
      player.update();
    }
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
}
