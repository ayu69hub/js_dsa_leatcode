// Insersation sort....

let arr = [1,3,4,2,1,10,7]
let n = arr.length

for (i=1;i<n;i++){
    let key = arr[i]
    let j = i-1;
   while(j>=0 && arr[j]>key){
    arr[j+1] = arr[j]
    j--
   }
   arr[j+1] = key
}
console.log(arr);