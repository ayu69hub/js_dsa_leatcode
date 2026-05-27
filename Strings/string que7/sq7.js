// pta kro character  kitne bar aaya ....

let prompt = require('prompt-sync')();
let s = prompt("enter a string")
let freqArr = new Array (123);
for(i=1;i<s.length;i++){
   let ascii = s.charCodeAt(i);
   freqArr[ascii]= freq[ascii]+1
}

console.log(freqArr);