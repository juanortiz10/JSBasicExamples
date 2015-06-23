function countBs(string){
  var counter=0;
    for(var i=0; i<string.length; i++){
      var currentValue=string.charAt(i);
      if(currentValue.toUpperCase()==currentValue){
          counter++;
      }
    }
    return counter;
}

function countChar(string){
  var counter=0;
    for(var i=0; i<string.length; i++){
      var currentValue=string.charAt(i);
      console.log(currentValue+ "is gonna be counted");
      if(currentValue.toUpperCase()==currentValue){
          counter++;
      }
    }
    return counter;
}

console.log(countBs("DiegoSebasTian"));
countChar("Juan ");
