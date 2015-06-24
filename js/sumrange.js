var array=[];
function range(start, end,step){
  if(typeof step == 'number' && step>=0){
    for(var i=start; i<=end; i=i+step){
        array.push(i);
    }
  }else if(step<0) {
    for(var i=end; i>start; i=i+step){
        array.push(i);
    }
  }else{
    for(var i=start; i<=end; i++){
        array.push(i);
    }
  }
    return array;
  }

function sum(){
  var suma=0;
  for(var i=0; i<array.length; i++){
    suma+=array[i];
  }
  return suma;
}
range(1,10,2);
console.log(array);
console.log(sum());
