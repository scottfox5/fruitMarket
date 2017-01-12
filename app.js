//Global Variables
var totalCash = 100;



//Fruit Constructor
function Fruit(name, currentPrice){
  this.name = name;
  this.currentPrice = currentPrice;
  this.inv = 0;
  this.totalBought = 0;
  this.totalSpent = 0;
}


//Fruit Array
var apple = new Fruit ('apple', 1);
var orange = new Fruit ('orange', 2);
var banana = new Fruit ('banana', 3);
var grape = new Fruit ('grape', 4);

var fruitArray = [apple, orange, banana, grape];
console.log(fruitArray);

//When Document Loads
$(function () {


  //Changes the current price every 15 seconds
  setInterval(changePriceAll(), 15000);

});

//Runs changePriceOne on each object in the fruitArray
function changePriceAll() {
  for (var i =0; i < 4; i++)
  changePriceOne(fruitArray[i]);
}

//Calls priceFluc and adds the value returned to the current price of the inputted fruit object
function changePriceOne(fruit){
  fruit.currentPrice += priceFluc();
  //Checks to ensure fruit price is between 0.50 and 9.99
  if (fruit.currentPrice > 9.99){
    fruit.currentPrice = 9.99;
  } else if (fruit.currentPrice < 0.50) {
    fruit.currentPrice = 0.50;
  }
}

//Returns a random value between -0.50 and 0.50
function priceFluc() {
  var fluc = 0;
  while (fluc === 0){
    fluc = (Math.random()-0.50);
  }
  return Number(fluc.toFixed(2));
}
