let arr = [
    [1,2,3]
    [4,5,6]
    [7,8,9]
]

let leftSum = 0;
let rightSum = 0;
for(i=0;i<arr.length;i++){
    for (j=0;j<arr[i].length;j++){
        if (i==j) leftSum += arr[i][j]
        if (i+j == arr.length-1) rightSum += arr[i][j]
    }
}
console.log("left sum "+leftSum);
console.log("rightt sum "+rightSum);



