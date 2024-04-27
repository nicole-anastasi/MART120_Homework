
var eyesocketsx = 100;
var eyesocketsy = 100;
var eyesocketsDirection = 5;

var eyeballleftx = 100;
var eyeballlefty = 100;
var eyeballrightx = 100;
var eyeballrighty = 100;
var eyeballleftDirection = -2;
var eyeballrightDirection = 2;

var glassesy = 100;
var glassesx = 100;
var glassesDirection = 1;
var glassesFill = 100;

var mouthay = 100;
var mouthax = 100;
var mouthbx = 100;
var mouthby = 100;
var mouthaDirection = 1
var mouthbDirection = 1

var textSize = 36;
var size = 22;
var count = 0;
var sizeDirection = 3;

function setup() {
    createCanvas(1000,1000);
}


function draw() 
{

  background(255)
// hair
    strokeWeight(1);
  fill(140,120,92,255);
  triangle(350,750,500,400,675,750);
    ellipse(500,410,350,420);
   
    // face+neck
    fill(202,175,106,240);
    square(450,595,110);
    ellipse(500,420,275,400);
    

    //  eye sockets
    fill(202,175,106,160);
    ellipse(eyesocketsx+345,395,eyesocketsx+5,50);
    ellipse(eyesocketsx+490,395,eyesocketsx-1,45);
    //eyesocketsx = eyesocketsx + 1;
    eyesocketsx+=eyesocketsDirection;
    if(eyesocketsx <=-500 || eyesocketsx >= 550)
    {
      eyesocketsDirection *= -1;
    }

    // eyeballs
    fill(128,68,17,180);
    circle(eyeballleftx+350,395,31);
    circle(eyeballrightx+485,395,28);
    //eyeballleftx = eyeballleftx - 1;
    //eyeballrightx = eyeballrightx + 1;
    eyeballleftx+=eyeballleftDirection;
    eyeballrightx+=eyeballrightDirection;
    if(eyeballleftx <= -400 || eyeballleftx >= 500)
    {
      eyeballleftDirection *= -1;
    }
  
    if(eyeballrightx >= 500  || eyeballrightx <= -400)
    {
      eyeballrightDirection *= -1;
    }

    // glasses
    fill(14,glassesFill+96,196,100);
    rect(glassesx+285,glassesy+250,110,90);
    rect(glassesx+435,glassesy+250,110,90);
    //glassesy--;
    //glassesx++;
    glassesy+=glassesDirection;
    glassesx+=glassesDirection;
    if(glassesx >= 450 || glassesx <= -100)
    {
      glassesDirection *= -1;
      glassesFill = glassesFill +40;
    }
    if(glassesy <= 0 || glassesy >= 800)
    {
      glassesDirection *= 1;
      glassesFill = glassesFill +40;
    }

    // mouth
    fill(225,158,160);
    ellipse(520,mouthay+425,115,26);
    fill(117,73,73);
    ellipse(520,mouthby+325,75,16);
    //mouthy++;
    mouthay+=mouthaDirection;
    mouthby-=mouthbDirection;
    if(mouthay >= 425 || mouthay <= 50)
    {
      mouthaDirection *= -1;
      mouthbDirection *= -1;
    }

    // pupils
    fill(0,0,0);
    circle(453,395,9);
    circle(587,395,8);

    // nose
    line(510,380,540,460);
    line(540,460,510,470);

    // glasses frame + hair
    strokeWeight(3);
    line(463,226,450,209);
    line(495,380,536,380);
    line(358,375,385,390);

    // dimples
    point(495,595);
    point(525,595);


    //textSize(36);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Nicole Anastasi",400,800 );
  }