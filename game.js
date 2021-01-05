class Game {

    constructor(){}

       
//to read gamestate from db
    getgamestate(){
         var gamestateref = database.ref('gamestate');
         gamestateref.on("value", function(data){
            gameS = data.val();
              })
    }
    
//update gamestate to db
    updategamestate(state){
        database.ref('/').update({
            'gamestate':state
        });

    }
   
   display(){
   
    }
}