//  print inverted right angle triangle.....


const prompt = require("prompt-sync")()
let n = prompt("Enter a number")
  for(i=1;i<=n;i++){
    for(j=1;j<=n-i+1;j++){
        Process.stdout.write("* ")
    }
    console.log();
  }

