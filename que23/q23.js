// //  triangle.....

let prompt = require('prompt-sync')();
let n = prompt("Enter a number")
for(i=1 ; i<=n; i++){
    for(j=1;j<=n-i;j++){
        Process.stdout.write(" ")
    }
    for(j=1;j<=i;j++){
        process.stdout.write("* ")
    }
    console.log();
}