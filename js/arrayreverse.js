function reverseArray(array){
    return array.reverse();
}

function reverseArrayInPlace(array){
    var newArray=[];
    for(var i= array.length-1; i>=0; i--){
       newArray.push(array[i]);
    }
    return newArray;
}

var array=[1,2,3,4,5,6];
console.log(reverseArray(array));
array.reverse();
console.log(reverseArrayInPlace(array));
