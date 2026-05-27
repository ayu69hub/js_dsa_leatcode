// Selection sort....

let arr=[10,4,2,5,8,4]
let n= arr.length

for(i=0;i<=n-1;i++){
    let small = i;
    for(j=i+1;j<n;j++){
       if (arr[small]>arr[j]){
        small = j;
       }
    }
    if (i!= small){
        let temp = arr[i]
        arr[i] = arr[small]
        arr[small]= temp
    }
}
console.log(arr);