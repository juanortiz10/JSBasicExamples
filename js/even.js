function isEven(number){
    if(number %2==0 && number>=0){
        isEven(number-2);
        console.log(number);
    }else if(number>=0){
        isEven(number-2);
        console.log(number);
    }
}

isEven(75);
