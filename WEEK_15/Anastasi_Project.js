var CA1x = 25;
var CA2x = 25;
var CA3x = 25;
var CA4x = 25;
var CA5x = 25;
var CA6x = 25;
var CA7x = 25;
var CA8x = 25;
var CA9x = 25;
var CA10x = 25;

var CA1xDirection = 45;
var CA2xDirection = 35;
var CA4xDirection = 40;
var CA3xDirection = 55;
var CA5xDirection = 47;
var CA6xDirection = 46;
var CA7xDirection = 55;
var CA9xDirection = 35;
var CA8xDirection = 45;
var CA10xDirection = 30;

function setup()
{createCanvas(1400,1000);}

function draw()
{
    background(255);

    textSize(48);
    text('Try Left-Side Letter Keys To Make Changes',200,50);

    fill(0,168,165,90);
    circle(CA1x,175,300);
    CA1x = CA1x + 5;
    CA1x+=CA1xDirection;
    if (CA1x > 1400)
    {CA1x = 20}
    if (CA1x < 15)
    {CA1x = 1350}
   
    fill(200,222,0);
    circle(CA2x,325,300);
    CA2x = CA2x +2;
    CA2x+=CA2xDirection;
    if (CA2x > 1400)
    {CA2x = 20}
    if (CA2x <15)
    {CA2x = 1350}

    fill(0,137,168);
    circle(CA3x,175,200);
    CA3x = CA3x +4;
    CA3x+=CA3xDirection;
    if (CA3x > 1400)
    {CA3x = 20}
    if (CA3x < 20)
    {CA3x = 1350}

    fill(63,0,235);
    circle(CA4x,225,150);
    CA4x = CA4x +1;
    CA4x+=CA4xDirection;
    if (CA4x > 1400)
    {CA4x = 20}
    if (CA4x <15)
    {CA4x = 1350}
    
    fill(247,195,203,150);
    circle(CA5x,275,175);
    CA5x = CA5x +5;
    CA5x+=CA5xDirection;
    if (CA5x > 1400)
    {CA5x = 15}
    if (CA5x < 14)
    {CA5x = 1375}

    fill(247,51,37,95);
    circle(CA6x,425,300);
    CA6x = CA6x +6;
    CA6x+=CA6xDirection;
    if (CA6x > 1400)
    {CA6x = 15}
    if (CA6x < 14)
    {CA6x = 1375}

    fill(255,117,18,150);
    circle(CA7x,675,350);
    CA7x = CA7x +7
    CA7x+=CA7xDirection;
    if (CA7x > 1400)
    {CA7x = 15}
    if (CA7x < 15)
    {CA7x = 1375}

    fill(77,255,228,125);
    circle(CA8x,800,200);
    CA8x = CA8x + 8
    CA8x+=CA8xDirection;
    if (CA8x > 1400)
    {CA8x = 15}
    if (CA8x < 15)
    {CA8x = 1375}

    fill(21,255,0,125);
    circle(CA9x,900,200);
    CA9x = CA9x +9
    CA9x+=CA9xDirection;
    if (CA9x > 1400)
    {CA9x = 15}
    if (CA9x < 15)
    {CA9x = 1375}

    fill(92,0,168,175);
    circle(CA10x,550,300);
    CA10x = CA10x + 100
    CA10x+=CA10xDirection;
    if (CA10x > 1400)
    {CA10x = 15}
    if (CA10x < 10)
    {CA10x = 1375}
}

function keyPressed()
{
    if (key == 's')
    {
        CA4xDirection *= -1;
    }
    else if (key == 'a')
    {
        CA1xDirection *= -1;
    }
    else if (key == 'w')
    {
        CA2xDirection *= -1;
    }
    else if (key == 'd')
    {
        CA5xDirection *= -1;
    }
    else if (key == 'x')
    {
        CA3xDirection *= -1;
    }
    else if (key == 'z')
    {
        CA6xDirection*= -1;
    }
    else if (key == 'q')
    {
        CA7xDirection*= -1;
    }
    else if (key == 'c')
    {
        CA9xDirection*= -1;
    }
    else if (key == 'e')
    {
        CA10xDirection*= -1;
    }
    else if (key == 'r')
    {
        CA8xDirection*= -1;
    }
    else if (key == 'space')
    {

    }
}