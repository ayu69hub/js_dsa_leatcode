// first letter ko capital bna do.....

let s = "ky haal hai londe";
let ans = "";
let arrStr = s.split(" ");
for(i=0;i<arrStr.length;i++){
    let word = arrStr[i]
    if (word.length<=2) ans = ans + word.toUpperCase()+" "
     else {
    ans = ans + word.charAt(0).toUpperCase()+word.substring(1,word.length-1)+word.charAt(word.length-1).toUpperCase()+" ";
 }   
}
console.log(ans);

// second method

let s = "ky haal hai londe";
let ans = "";
let arrStr = s.split(" ");
for(i=0;i<arrStr.length;i++){
    let word = arrStr[i]
    for(j=0;j<word.length;j++){
        let asci = word.charCodeAt(j)
        if (j==0 || j==word.length-1){
            if(asci>=97 && asci<=122){
                ans = ans+String.fromCharCode(asci-32)
            }
            else ans = ans+word.charAt(j)
        }
        else ans = ans+word.charAt(j)
    }
    ans = ans+" "
}

       