// print strong numbers....

let prompt = require("prompt-sync")()
let n = Number(prompt("Enter a number"))
let copy=n

let ans=0;
while(n>0){
    let dig = n%10;
    let fact = 1;
    for (let i =1 ; i<=dig;i++){
        fact = fact * i;
    }
    ans = ans + fact
    n = Math.floor(n/10)

}
if(n===copy)console.log("Strong number");
else console.log("Not a strong number");

