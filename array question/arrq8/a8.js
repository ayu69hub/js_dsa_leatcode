// rotate element by k tyms.....

let arr =[1, 2, 3, 4, 5]
// console.log(arr);

// let k = 2;

// for(j=1;j<=k;j++){
//     let copy= arr[0]
//     for(i=0;i<arr.length-1;i++){
//         arr[i] = arr[i+1]
//     }
//     arr[arr.length-1]=copy
// }
// console.log(arr);
    
    // or

let temp = new Array(arr.length)
let k = 3;
for(i=0;i<arr.length-1;i++){
    temp[i]=arr[(i+k)%arr.length]
}
console.log(temp);