//pallindrome String...
let prompt = required ('prompt-sync')();
let s = prompt("Enter a string")
let isPallindrome = true;
let i = 0,  j=s.length-1;

while(i<j){
    if(s[i] !=s[j]){
        isPallindrome = false;
        break
    }
    i++
    j--
}
if(isPallindrome) console.log("given string is pallindrome")
else console.log("given string is not pallindrome")




