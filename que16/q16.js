//  Guess a number game.....
  


let com = Math.floor(Math.random()*100)+1;
let userInput;

do{
    userInput=Number(prompt("enter a number b/w 1 to 100 "))
    if ( isNaN (userInput) || userInput < 0 || userInput > 100 ){
        console.log("plz enter a valid number");
        continue
    }
    if (userInput > com) console.log ("too high, try again");
    else if (userInput < com) console.log ("too low, try again");
    else console.log("congrants the number was "+ com);
} while (userInput !== com); 