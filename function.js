function evenify(num) {

    if(num % 2 == 0){
        result = num;
        
    }
    else{
        result = num*2;
    }
    return result;
   
}

var result = evenify(66);
console.log('Square is: ' + result*result);
