// linear search......
let target = Number(prompt("Enter a number"))
let arr = [ 10,96,69,88]
let index = -1;
for(i=0;i<arr.length-1;i++){
    if(arr[i]== target){
        index = i;
        break
    }
}
if (index== -1) console.log("Element not found");
else console.log("Element found at"+ index);