

function setup() {
    createCanvas(1000,1000);
}

function draw() 

{


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
    ellipse(445,395,105,50);
    ellipse(590,395,95,45);

    // eyeballs
    fill(128,68,17,180);
    circle(450,395,31);
    circle(585,395,28);

    // glasses
    fill(14,196,196,100);
    rect(385,350,110,90);
    rect(535,350,110,90);

    // mouth
    fill(225,158,160);
    ellipse(520,525,115,26);
    fill(117,73,73);
    ellipse(520,525,75,16);

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

    point(495,595);
    point(525,595);

    textSize(36);
    text('Nicole Anastasi', 400, 850);
    
}