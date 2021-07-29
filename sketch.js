const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var maxDrops=100;

var rando;
var thunderCreatedFrame = 0;

var thunder1, thunder2, thunder3, thunder4;

var umbrella;
var thunder;

var drop1;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
}

function setup(){
   engine = Engine.create();
   world = engine.world;
   
   createCanvas(400,700);
   
   umbrella = new Umbrella(200,500);
   drop1 = new Drops(50,50);

  // if(frameCount% 150 === 0) {
   // drop1 = new Drops(random(0,400),);

     for(var i=0; i<maxDrops; i++) {
          drop1 = new Drops(50,i+30);
          drops.push(drop1);
//}
}
}

function draw(){
    Engine.update(engine);
    background("white");
    
    rando = Math.round(random(1,4));
    if(frameCount%80 === 0) {
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10,10);
        switch (rando) {
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3, 0.6);
    }

    if(thunderCreatedFrame + 10 === frameCount && thunder) {
        thunder.destroy();
    }

    umbrella.display();
   drop1.display();
    //drops.display();

    //for(var i = 0; i<maxDrops; i++){
      //  drops[i].displayDrop();
        //drops[i].update();
   // }

    drawSprites();
}   

