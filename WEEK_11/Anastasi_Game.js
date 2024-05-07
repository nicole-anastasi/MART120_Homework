
//player
var px = 500;
var py = 500;

//obstacles
var o1x = 1;
var o1y = 445;
var o1Direction = +2;
var o1xSpeed;
var o1ySpeed;
var o2x = 910;
var o2y = 460;
var o2Direction = -6;
var o2xSpeed;
var o2ySpeed;
var movement = 10;
  
var mouseShapex;
var mouseShapey;





function setup()
{
    createCanvas(1000,1000);
    movement = floor(random() * 10);
    o1xSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
   o1ySpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{   
 background(255);

 //createBorders(10);
 

    //player
  fill(14,207,175);
circle(px,py,50);

    //obstacle 1- blue
fill(45,12,207);
rect(o1x,o1y,25,150);
if(o1x >= 920 || o1x <= 0)
{
    movement *= -1;
o1Direction = -1;
}
    o1x += movement;

o1xSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
o1ySpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    //obstacle 2- orange
fill(255,131,36);
rect(o2x,o2y,35,100);
o2x+=o2Direction;

if(o2x <= 20 || o2x >= 950)
{
  o2Direction *= -1;
}

    //player movement up and down
if (keyIsDown(88))
{
    py+=20;
}
if (keyIsDown(87))
{
    py-=20;
}
    //shape tied to mouse click
fill(173, 7, 87);
circle(mouseShapex, mouseShapey, 40);

    //exit message
    textSize(20);
    text("Escape", width-75,height-75)

    if(px > width && py > width-50)
    {
        textSize(30);
        text("You Win!", width/2-50, height/2-50);
    }


}

function createCharacter (X, Y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
}

function drawCharcter()
{
    fill(157, 173, 12);
    circle(characterX, characterY, 30);

}
function mouseClicked()
{
    mouseShapex = mousex;
    mouseShapey = mousey;
}

    //player movement 
function keyPressed()
{
    if (key == 'd')
    {
        px+=20;
    }
    else if (key == 'a')
    {
        px-=20;
    }
    else if (key == 'w')
    {
        py+=20;
    }
    else if (key =="x")
    {
        py-=20;
    }
}