let n = Number(prompt("Enter a number"));


let isPrime = true;

for(i=2;i<n/2;i++){
    if(n % i==0){
        isPrime = false
        break;
    }
}

if(isPrime) console.log("prime number");
else console.log("non prime number");