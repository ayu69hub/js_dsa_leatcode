function callerfnc(fn){
    setTimeout(fn, 3000);

}


callerfnc(function(){
    console.log("hey");
})