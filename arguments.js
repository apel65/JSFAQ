//arguments is a array like object

function addNum(a, b){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum += element;
    }
    
    return sum;
}

var result = addNum(3, 5, 5, 3, 6, 3, 6);

console.log(result);
