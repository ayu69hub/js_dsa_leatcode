// implement a fun that throtal another function.


function throt(fn,delay){
    let lastCall = 0;
    return function(){
        let current = Date.now();
        if (current - lastCall >= delay){
            lastCall = current;
            fn();
        }
    }
}
 var newfnc = throt(function(){
    console.log("will run in 2 sec");

 },2000);


 newfnc();