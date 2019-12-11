function setup() {
createCanvas(640, 360);
}
function draw () {
background ('lightblue');
//head
fill ('tan');
ellipse (320,175,180,186);
//eyes
fill ('white');
ellipse (275,170,35);
ellipse (355,170,35);
//pupils
fill ('black');
    ellipse (275,170,10);
    ellipse (355,170,10);

//nose
fill ('tan')
arc(315,195, 16, 10, 2, PI + QUARTER_PI, OPEN);
//mouth
stroke ('black');
fill ('pink');
arc(315, 227, 15, 10, 40, PI + QUARTER_PI, OPEN);
//hat
fill ('black ');
rect (295,20,50,68);
rect (260,85,120,10);
//top    	
    fill ('black');
rect (270,268,100,80);
    fill('red');
rect (305,268,25,70);
rect (340,277,25,10);
 


   
}
