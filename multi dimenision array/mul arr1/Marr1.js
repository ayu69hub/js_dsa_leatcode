let prompt = require("prompt-sync")()
let size = Number(prompt("Enter a number"))
let arr = new Array(size)
for(i=0;i<arr.length;i++){
    arr[i] = new Array(5);

}

for (let i=0;i<arr.length;i++){
    for(letj=0;j<[i].length;j++){
        arr[i][j]=Number(prompt("Enter element"))
    }
}
console.log(arr);










