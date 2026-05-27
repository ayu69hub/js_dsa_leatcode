// max element from array

let arr = [10,14,23,3.5];
let max = arr[0]

for (let i =1;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i]
    }
}
console.log("Max element "+ max);