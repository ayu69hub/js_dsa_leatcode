// automorphir number......(jiske sq krne ke baad same digits last me aaye.)


let n = Number (prompt("Enter a number"))
let copy = n;
let sq = n*n;

let count = 0;
while (n>0){
   count++
   n = Math.floor(n%10);

}
if (sq%Math.pow(10 , count)== copy)
    console.log ("Automorphic number")
else console.log("not");