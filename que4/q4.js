// implement ur own version of `.map()` as hof.
var arr = [1, 2, 3, 4, 5]

function mapkicopy(arr,fnc){
    var newarr = [];
    for (var i = 0; i<arr.length; i++){
        newarr.push(fnc(arr[i]));
    }
    return newarr;
}

var ans = mapkicopy([1, 2, 3, 4, 5], function (value){
    return value + 3;
});