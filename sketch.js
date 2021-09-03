var life_bar1,life_bar2,life_bar3;
var bomb1,bomb2,bg,tank1,tank2,tank1_img,tank2_img,bomb1_img,bomb2_img;
var playerCount,gameState;


function preload(){
    life_bar1=loadImage("life_bar1.png")
    life_bar2=loadImage("life bar2.png")
    life_bar3=loadImage("life bar3.png")
    tank1_img=loadImage("tank1.png")
    tank2_img=loadImage("tank2.png")
    bg=loadImage("bg battlefield.jpg")
    bomb1_img=loadImage("bomb1.png")
    bomb2_img=loadImage("bomb2.png")

}




function setup(){
createCanvas(1000,1000)
    tank1=createSprite(900,250,50,50)
    tank1.addImage(tank1_img);
    tank1.scale=0.3;

tank2=createSprite(100,250,50,50)
    tank2.addImage(tank2_img);
    tank2.scale=1.2;
}


function draw(){
drawSprites();
}