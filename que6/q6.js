// implement a fun that limits how many tym another fun can be called(closure+hof).

function fnlimiter(fn, limit){
     let total=0;
     return function (){
        if (total< limit){
            total++;
            fn();
        }
        else{
          console.error("limit reached");    
                
            }

            
        };
     }


var lim = fnlimiter(function(){
    console.log("hey")
},4);

lim();
lim();
lim();
lim();
lim();
    