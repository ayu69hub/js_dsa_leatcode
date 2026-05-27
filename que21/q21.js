



const prompt = require("prompt-sync")()
let n = prompt("Enter a number")
  for(i=1;i<=n;i++){
    let temp = 65;
        for(j=1;j<=i;j++){
        Process.stdout.write(String.fromCharCode(temp)+" ")
        temp++
    }
    console.log();
  }