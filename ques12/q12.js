let n = Number(prompt("Enter a number"));
let evenSum=0 , oddSum=0;

for(let i=0;i<=n;i++){
   if(i%2==0) evenSum = evenSum + i;
   else oddSum = oddSum + i;
}

console.log("even sum"+ evenSum);
console.log("odd sum"+ oddSum);