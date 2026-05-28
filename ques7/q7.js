function onlyOnceCaller(fn){
    let executed = false;
    return function(){
      if (!executed){
        executed = true;
        fn();
      }
      else{
        console.log("ab nii chlega");
      }  
    }
}


 


var newfnc = onlyOnceCaller(function (){
    console.log("chl gya"); 
});


newfnc();
newfnc();