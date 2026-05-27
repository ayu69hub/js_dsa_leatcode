// find max and second max......

let arr = [28 , 6 ,74 ,48 , 84 , 79]
let max = Math.max(arr[0] , arr[1]);
let sMax = Math.min(arr[0] , arr[1]);

for (i=2;i<arr.length;i++){
    if (arr[i]>max){
        sMax = max;
        max = arr[i]

    }else if (arr[i]>sMax  && arr[i] !=max){
        sMax = arr[i];
    }
}
console.log("second max "+ sMax);
console.log("max "+ max);