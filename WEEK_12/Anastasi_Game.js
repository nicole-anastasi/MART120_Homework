
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
var o2Direction = +4;
var o2xSpeed;
var o2ySpeed;
var o1movement = 5;
var o2movement = 5;
var o3x = 250;
var o3y = 225;
var o3Direction = -3;
var o3ySpeed;
var o3xSpeed;
var x = 650;
var y = 650;
  
var mouseShapex;
var mouseShapey;
var thickness;
var createBorders;
var Character2;

function setup()
{
    createCanvas(1000,1000);
    o1movement = floor(random() * 10);
    o1xSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    o1ySpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    o2movement = floor(random() * 10);
    o2xSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    o2ySpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()

{ 
 background(255);

 createBorders(10);

    //player
drawCharacter2(px,py,50);

    //obstacle 3- purple
squareo3();

    //obstacle 1- blue
fill(45,12,207);
rect(o1x,o1y,25,150);
if(o1x >= 920 || o1x <= 0)
{
    o1movement *= -1;
    o1Direction *= -1;
}
    o1x += o1movement;

o1xSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
o1ySpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    //obstacle 2- orange
fill(255,131,36);
rect(o2x,o2y,35,100);
o2x += o2movement;

o2xSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
o2ySpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

if(o2x <= 20 || o2x >= 950)
{
    o2movement *= -1;
    o2Direction *= -1;
}

createCharacter();
//drawCharacter();

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

    //Player
function drawCharacter2(px,py)
{
    fill(14,207,175);
    circle(px,py,50);
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

//obstacle 3- purple
function squareo3()
{
    o3x,
    o3y,

fill(131,24,173);
square(o3x,o3y,50);
o3y+=o3Direction;
if (o3y <= 30 || o3y>= 900)
    {
        o3Direction *= -1;
        //o3Movement *= -1;
    }
    o3xSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    o3ySpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
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
        px+=30;
    }
    else if (key == 'a')
    {
        px-=30;
    }
    else if (key == 'w')
    {
        py-=30;
    }
    else if (key =="x")
    {
        py+=30;
    }
}
function createBorders(thickness)
{
    rect(0,0,width,thickness);
    rect(0,0,thickness,height);
    rect(0,height-thickness,width,thickness);
    rect(width-thickness,0,thickness,height-50);
}

