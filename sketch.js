//Create variables here
var dog, happyDog, database, foodS, foodStock;
var gameS,game;
var count = 0;
var feedbutton,addfoodbutton;
var fedtime,lastfedtime;
var foodobj;
 var bedroomImg,gardenImg,washroomImg;
 var currentime;
function preload()
{
  //load images here
  DogImg = loadImage("images/dogImg.png");
  happydogImg = loadImage("images/dogImg1.png");
  lazydogImg = loadImage("images/Lazy.png");
  bedroomImg = loadImage("images/Bed Room.png");
  gardenImg = loadImage("images/Garden.png");
  washroomImg = loadImage("images/Wash Room.png");

}

function setup() {
  createCanvas(1000, 500);
  database = firebase.database();
  
  game = new Game();
  game.getgamestate();

  foodobj = new Food();
  foodobj.getfoodstock();
  foodobj.getfoodtime();

  feedbutton = createButton("Feed the Dog");
  feedbutton.position(500,100);
  feedbutton.size(120,25);

  addfoodbutton = createButton("Add food");
  addfoodbutton.position(650,100);
  addfoodbutton.size(100,25);

  dog = createSprite(800,400);
  dog.addImage("dogImg",DogImg);
  dog.addImage("dogImg1",happydogImg);
  dog.addImage("lazydogImg",lazydogImg);
  dog.scale = 0.2;
}


function draw() {  
  background(46, 139, 87);
  if(gameS!=="hungry"){
    feedbutton.hide();
    addfoodbutton.hide();
  } else {
    if (count <=0){
   dog.changeImage("lazydogImg",lazydogImg); }
   else {
    dog.changeImage("dogImg1",happydogImg);
   }
  drawSprites();
  feedbutton.show();
  addfoodbutton.show();
  }
  currentime = hour();
  timediff = currentime - lastfedtime;

  if(timediff === 01 || timediff === -23 ){
    foodobj.garden();
    gameS = "playing";
    game.updategamestate(gameS);
  } else
  if(timediff === 02 || timediff === -22 ){
    foodobj.bedroom();
    gameS = "sleeping";
    game.updategamestate(gameS);
  } else
  if((timediff > 02 && timediff <= 04 )|| timediff === -21 ||  timediff === -20 ) {
    foodobj.washroom();
    gameS = "bathing";
    game.updategamestate(gameS);
  }
  else{
    if(foodobj!== undefined){

      foodobj.display();
    }
    gameS = "hungry";
    game.updategamestate(gameS);
  }
  textSize(20);
  fill("blue");
  text("Last Feed :  "+ lastfedtime+ " hrs",250,70);
  

  feedbutton.mousePressed(function() { 
    foodobj.foodstock--;
  
    foodobj.updatefoodstock(foodobj.foodstock)
    foodobj.updatefeedtime();
    count = 30;
   } )

   
  addfoodbutton.mousePressed(function() { 
    foodobj.foodstock++;
   
    foodobj.updatefoodstock(foodobj.foodstock)
   } )

  if(count >0){
    count--
  }
 

}




