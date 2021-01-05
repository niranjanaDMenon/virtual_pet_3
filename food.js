class Food{

    constructor(){

        this.milkimage = loadImage("images/Milk.png");
        this.foodstock ;
        
    }
//to read food count from db
    getfoodstock(){
         var foodStockref = database.ref('foodmilk');
         foodStockref.on("value", function(data){
            foodS = data.val();
              })
    }
    getfoodtime(){
        var foodStockref = database.ref('foodtime');
        foodStockref.on("value", function(data){
            lastfedtime = data.val();
             })
   }
//update food count to db
    updatefoodstock(stock){
        database.ref('/').update({
            'foodmilk':stock
        });

    }
    updatefeedtime(){
        database.ref('/').update({
            'foodtime':hour()
        });

    }
    bedroom(){
        background(bedroomImg);
    }
    washroom(){
        background(washroomImg);
    }
    garden(){
        background(gardenImg);
    }

   display(){
    this.foodstock = foodS;
     var x=50;
     var y=100;
    if ( this.foodstock > 0){
       
     //   console.log(this.foodstock);
        for(var i=0;i < this.foodstock; i++){
           
        if(i%10 === 0 ){
            x=50;
            y=y+50;
        }
        image(this.milkimage, x,y,50,50);

        x=x+30
         }
    }
    }
}