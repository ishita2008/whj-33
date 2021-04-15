const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
 
var backgroundImg



var snowfall=[];

var maxSnowfall=100;

var bg="sunrise.jpg";




function preload(){


  snowfall1=loadImage("snow4.webp")
  snowfall2=loadImage("snow5.webp")
  girlImage=loadImage("Girl.png")
  girl1Image=loadImage("girl1.png")
  smallGirlImage=loadImage("smallGirl.png")
  
  
  
  getBackgroundImg();

}


function setup() {

createCanvas(1000,800)

  engine = Engine.create();
  world = engine.world;

  for(var i=0;i>maxSnowfall;i++){
    snowfall.push(new createSnowfall(random(0,500),random(0,500)))
}

snowfall1=new Snowfall(200,100,30,30)
   snowfall2=new Snowfall(200,300,30,30)
   snowfall3=new Snowfall(400,100,30,30)
   snowfall4=new Snowfall(500,400,30,30)

   snowfall5=new Snowfall(800,600,30,30)
   snowfall4=new Snowfall(700,400,30,30)

   snowfall5=new Snowfall(900,600,30,30)

 




   

 
   
     
  }



 

  


function draw() {
  
  
  Engine.update(engine)
  if(backgroundImg)
  background(backgroundImg);


  snowfall1.display();
  snowfall2.display();  
  snowfall3.display();

  snowfall4.display();

  if(backgroundImg==="snow1.jpg"){
    snowfall1.display();
  }
  
  
  
  
  drawSprites();
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour<=0600 && hour<=19){
      bg = "sunrise.jpg"

      girl=createSprite(300,500,50,50)
      girl.addImage(girl1Image)
      girl.scale=0.5

    

      



 

       
      
      


      
 

     
  }
  else{
      bg = "snow1.jpg";

      girl=createSprite(200,400,50,50)
      girl.addImage(girlImage)
      girl.scale=0.5

      smallGirl=createSprite(80,400,80,80)
      smallGirl.addImage(smallGirlImage)
      smallGirl.scale=1

      
   




      
      
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}

