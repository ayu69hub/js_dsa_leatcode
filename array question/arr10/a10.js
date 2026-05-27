// binary searching......


let arr = [22,27,45,56,69,76,87];

if (binarySearch(arr,69) === -1)console.log("not found");
else console.log("element found");

function binarySearch( arr, target) {
    let s = 0 , e = arr.legth-1;
    while (s<=e) {
        let mid = Math.floor((s+e)/2)
        if (arr[mid] == target) return mid
        else if (arr[mid]>target) e = mid-1 ;
        else s = mid +1;      
    }
    return -1
}