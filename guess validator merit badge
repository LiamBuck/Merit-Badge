// Guess Validator Merit Badge
// By Liam Buck
var answer = Math.floor(Math.random()*100)+1

console.log(answer);

var guess = 0;

var turns = 0;

while (guess != answer) {
 
    guess=prompt("Guess my number from 1-100");

	if (guess == "q") break;
	
	if (validator(guess)==true) {
		
		turns++;
		
		if (guess<answer) alert("Too low");
			
		else if (guess>answer) alert("Too High");
			
	}
	
	else alert("Invalid Guess. Retry!");
	
}

if (guess == answer) alert("You got it in "+turns+" turns");

else alert("Quitter");

function validator(guess){
	
	if (guess > 0 && guess < 101) return true;
	
	else return false;
	
}
	


    


