class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {

            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
            
            player1 =createSprite(200,500);
            player1.addImage(bucketImg);
            player1.scale = 0.2
            player2 = createSprite(800, 500);
            player2.addImage(bucketImg); 
            player2.scale = 0.2
            players =[player1,player2];

            

        }

        play(){
                form.hide();
                Player.getPlayerInfo();//allPlayers = [ryan, ryan1]
                var x = 100;
                var y = 200;
                var index = 0;

                for(var plr in allPlayers){
                    index += 1;               

                    x=800-allPlayers[plr].distance;
                    y=500;

                    players[index-1].x = x;
                    players[index-1].y = y;

                    if(index === player.index){
                        fill('red');
                            textSize(60)
                        text(allPlayers[plr].name , x-60,y-125);
                    }       
                    
                    textSize(25);
                    fill("white");
                    text("Player 1 :" +allPlayers.player1.score,50,50);
                   text("Player 2 :" + allPlayers.player2.score, 50, 100);
                }//end of for

                if(keyIsDown(RIGHT_ARROW) && player.index != null){
                        player.distance -= 12;
                        player.update();
                }
                    
                
                if(keyIsDown(LEFT_ARROW) && player.index != null){
                    player.distance += 12
                    player.update()
                }

                //spawn coins
                if(frameCount % 30 === 0){
                    coins = createSprite(random(1, 1000),0, 50, 50)
                    coins.addImage(coinImg);
                    coins.scale = 0.05
                    coins.velocityY = 5;

                    coinG.add(coins);
                }

                 if(player.index != null){

                    for(var i=0; i< coinG.length;i++){
                        if(coinG.get(i).isTouching(players)){

                            coinG.get(i).destroy();
                                player.score += 1;
                                player.update();    
                        }
                    }
                 }

                 drawSprites();

         }
    
   

    end(){
       console.log("Game Ended");
    }
}