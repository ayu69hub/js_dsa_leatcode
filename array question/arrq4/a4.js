// reverse arr....


let arr = [1,3,4,5,9];


// let temp = new Array(arr.length)
// let i = 0;
// for(j=arr.length-1;j>=0;j--){
//     temp[i]= arr[j]
//     i++
// }

// console.log(temp);

// or

let i=0 , j=arr.length;

while(i<j){
    let temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp;
    i++
    j--
}
console.log(arr);