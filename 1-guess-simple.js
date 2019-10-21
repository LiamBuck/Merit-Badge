// By Liam Buck
var answer = Math.floor(Math.random()*100)+1

alert(answer);

var guess = 0;

while (guess != answer) {
 
    guess==prompt("Guess my number from 1-100");


    if (guess<answer) alert("Too low");
  
    else if (guess>answer) alert("Too high");
  
}

alert("You got it");
