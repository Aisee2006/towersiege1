const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//variables
var backgroundImg;
var engine,world,box2,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21;
var ground,polygon,slingshot,polygon_img;
function preload(){
 backgroundImg = loadImage("bg1.jpg");
 polygon_img = loadImage("polygon.png");
}

function setup(){
var canvas=createCanvas(1200,400);
engine=Engine.create();
world=engine.world;

ground=new Ground(600,height,1200,20);

box1 = new Box1(700,320,70,70);
box2 = new Box1(700,320,70,70);
box3 = new Box1(700,320,70,70);
box4 = new Box1(700,320,70,70);
box5 = new Box1(700,320,70,70);
box6 = new Box1(700,320,70,70);

box7 = new Box2(700,320,70,70);
box8 = new Box2(700,320,70,70);
box9 = new Box2(700,320,70,70);
box10 = new Box2(700,320,70,70);
box11= new Box2(700,320,70,70);

box12= new Box1(700,320,70,70);
box13 = new Box1(700,320,70,70);
box14 = new Box1(700,320,70,70);
box15 = new Box1(700,320,70,70);

box16 = new Box2(700,320,70,70);
box17 = new Box2(700,320,70,70);
box18 = new Box2(700,320,70,70);

box19 = new Box1(700,320,70,70);
box20 = new Box1(700,320,70,70);

box21= new Box2(700,320,70,70);

polygon=Bodies.circle(50,200,20);
World.add(world,polygon);
imageMode(CENTER);
image(polygon_img,polygon.position.x,polygon.position.y,40,40);

slingshot = new Slingshot(polygon.body,{x:100,y:200});

}

function draw(){
background(backgroundImg);
Engine.update(engine);

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();

ground.display();

slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
   }
   function mouseReleased(){
    slingshot.fly();
   }