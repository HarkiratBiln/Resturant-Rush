//Creating the Variables and Game States
var burgerIMG, hotdogIMG, noodlesIMG, friesIMG;
var burger, hotdog, noodles, fries;
var bowlIMG, plate1IMG, plate2IMG, hotdogBunsIMG, burgerBunsIMG, sausagesIMG, meatpattieIMG, tomatoIMG, lettuceIMG, cheeseImg, plainNoodlesIMG;
var bowl, plate1, plate2, hotdogBuns, burgerBuns, sausages, meatpattie, tomato, lettuce, cheese, plainNoodles;
var foodIMG, food;
var customer1;
var custIMG1,custIMG2,custIMG3,custIMG4;
var backgroundImg,b1,b2;
var coin, coinIMG;

var ingredientsGroup, foodGroup;

var toggleSceneButton;
gameState = "kitchen";

var stockBoard;


 //Creating a Stock
 var stock = {
  hotdogBunsCount : 10,
  burgerBunsCount : 10,
  sausagesCount : 10,
  lettuceCount : 10,
  cheeseCount : 10,
  meatpattieCount : 10,
  tomatoCount : 10,
  noodlesCount : 10,
  friesCount : 10,
  plain_noodles : 10
};


function preload(){
  //getScene();
  b1 = loadImage("images/kitchen.jpg");
  b2 =loadImage("images/shop.jpg");
  //Coin Image
  coinIMG = loadImage("images/coin.png");

  //Customer Images
  custIMG1 = loadImage("images/man.png");
  custIMG2 = loadImage("images/man2.png");
  custIMG3 = loadImage("images/women.png");
  custIMG4 = loadImage("images/girl.png");

  //The Items on Menu
  burgerIMG = loadImage("images/burger.png");
  hotdogIMG = loadImage("images/hotdog.png");
  noodlesIMG = loadImage("images/noodles.png");
  friesIMG = loadImage("images/fries.png");

  //Ingredient Images
  bowlIMG = loadImage("images/bowl.png");
  plate1IMG = loadImage("images/plate.png");
  plate2IMG = loadImage("images/plate.png");
  hotdogBunsIMG = loadImage("images/hotdog_buns.png");
  burgerBunsIMG = loadImage("images/burger_buns.png");
  sausagesIMG = loadImage("images/sausages.png");
  meatpattieIMG = loadImage("images/meatpattie.png");
  tomatoIMG = loadImage("images/tomato.png");
  lettuceIMG = loadImage("images/lettuce.png");
  cheeseImg = loadImage("images/cheese.png");
  plainNoodlesIMG = loadImage("images/plain_noodles.png");
  
  
}



function setup() {
  createCanvas(windowWidth, windowHeight);

  foodGroup = new Group();
  ingredientsGroup = new Group();
  custGroup = new Group();

  //Creating the Sprites for Dishes
  burger = createSprite(width/2+100,height/2+100);
  burger.addImage(burgerIMG);
  burger.scale = 1.4;
  hotdog = createSprite(width/2-300,height/2+100);
  hotdog.addImage(hotdogIMG);
  hotdog.scale = 1.3;
  fries = createSprite(width/2-100,height/2+100);
  fries.addImage(friesIMG)
  fries.scale = 0.7;
  noodles = createSprite(width/2-100,height/2+200);
  noodles.addImage(noodlesIMG);


  //Creating the Sprites for Ingredients
  bowl = createSprite(width/2-700,height/2+90);
  bowl.addImage(bowlIMG);
  bowl.scale = 1.7;
  plate1 = createSprite(width/2+600,height/2+125);
  plate1.addImage(plate1IMG);
  plate1.scale = 1;
  plate2 = createSprite(width/2+300,height/2+185);
  plate2.addImage(plate2IMG);
  plate2.scale = 1.3;
  tomato = createSprite(width/2+400,height/2+180);
  tomato.addImage(tomatoIMG);
  tomato.scale = 0.8;
  sausages = createSprite(width/2+550,height/2+125);
  sausages.addImage(sausagesIMG);
  sausages.scale = 0.5;
  cheese = createSprite(width/2+230,height/2+180);
  cheese.addImage(cheeseImg);
  cheese.scale = 0.4;
  lettuce = createSprite(width/2+310,height/2+180);
  lettuce.addImage(lettuceIMG);
  lettuce.scale = 1;
  meatpattie = createSprite(width/2+650,height/2+128);
  meatpattie.addImage(meatpattieIMG);
  meatpattie.scale = 0.3;
  burgerBuns = createSprite(width/2-500,height/2+150);
  burgerBuns.addImage(burgerBunsIMG);
  burgerBuns.scale = 0.7;
  hotdogBuns = createSprite(width/2-700,height/2+200);
  hotdogBuns.addImage(hotdogBunsIMG);
  plainNoodles = createSprite(width/2-850,height/2+200);
  plainNoodles.addImage(plainNoodlesIMG);

  //Creating Sprites for the Coin
  coin = createSprite(width/2+200,height/2-200);
  coin.addImage(coinIMG);



  //Adding the Ingredients into a Group
  ingredientsGroup.add(tomato);
  ingredientsGroup.add(sausages);
  ingredientsGroup.add(cheese);
  ingredientsGroup.add(lettuce);
  ingredientsGroup.add(meatpattie);
  ingredientsGroup.add(burgerBuns);
  ingredientsGroup.add(hotdogBuns);
  ingredientsGroup.add(bowl);
  ingredientsGroup.add(plainNoodles);
  

  toggleSceneButton = createSprite(width-100,height-100,50,50);
  toggleSceneButton.shapeColor = "blue";
 
  backgroundImg = b1;
}


function draw() {
  background(backgroundImg);
  drawSprites();
  if(gameState === "kitchen") {
    ingredientsGroup.setVisibleEach(true);
    custGroup.setVisibleEach(false);


    if(mousePressedOver(tomato)){
      stock.tomatoCount -=1;
    }

    if(mousePressedOver(sausages)){
      stock.sausagesCount -=1;
    }

    if(mousePressedOver(cheese)){
      stock.cheeseCount -=1;
    }

    if(mousePressedOver(lettuce)){
      stock.lettuceCount -=1;
    }

    if(mousePressedOver(meatpattie)){
      stock.meatpattieCount -=1;
    }

    if(mousePressedOver(burgerBuns)){
      stock.burgerBunsCount -=1;
    }

    if(mousePressedOver(hotdogBuns)){
      stock.hotdogBunsCount -=1;
    }

    if(mousePressedOver(bowl)){
      stock.bowlCount -=1;
    }

    if(mousePressedOver(plainNoodles)){
      stock.plainNoodlesCount -=1;
    }

    
  }else if(gameState === "shop"){
    
    ingredientsGroup.setVisibleEach(false);
     //Creating the Sprites for Customers
      customer1 = createSprite(width/2,height/2);
      var rand = Math.round(random(1,4));
      switch(rand){
        case 1: customer1.addImage(custIMG1);
                break;
        case 2: customer1.addImage(custIMG2);
                break;
        case 3: customer1.addImage(custIMG3);
                break;
        case 4: customer1.addImage(custIMG4);
                break;
        default : break;       
      }
  


  }


  if(mousePressedOver(toggleSceneButton)) {
    
    if(gameState === "kitchen"){
      gameState = "shop";
    }
    if(gameState === "shop"){
      gameState = "kitchen";
    }

    getScene();
  }
  
  displayStockBoard();

}




//to change the background of the game on toggle button press
function getScene(){
  if(gameState === "kitchen") {
    backgroundImg = b1;
   
  }
  else if(gameState === "shop") {
    backgroundImg = b2;
    
  }
}



// the stock of the ingredients
function displayStockBoard(){

  stockBoard = createSprite(width -230,340,140,150);
  stockBoard.shapeColor = "white";
  textSize(9);
  text("Stock Report",width - 250,300)
  text("Hot Dogs Buns -" + stock.hotdogBunsCount, width-270,310);
  text("Burger Buns -" + stock.burgerBunsCount, width-270,320);
  text("Sausages -" + stock.sausagesCount, width-270,330);
  text("Lettuce -" + stock.lettuceCount, width-270,340);
  text("Cheese -" + stock.cheeseCount, width-270,350);
  text("Meat Pattie -" + stock.meatpattieCount, width-270,360);
  text("Tomato -" + stock.tomatoCount, width-270,370);
  text("Noodle -" + stock.noodlesCount, width-270,380);
  text("Fries -" + stock.friesCount, width-270,390);
}

