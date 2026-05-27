// convert small to capital and capital to small....

let prompt = required ('prompt-sync')();
let s = prompt("Enter a string")
console.log(s);

let ans ="";
for(i=0;i<s.length;i++){
    let asci = s.charCodeAt(i);
    if(asci>=65 && asci<=90){
        ans = ans+String.fromCharCode(asci+32)
    } 
    else if (asci>=97 && asci<=122){
        ans = ans+String.fromCharCode(asci-32)
    }

}