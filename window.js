var name = 'kuddus';

function add (num1, num2){
    result = num1 + num2;
    console.log('result inside', name);

    function double(num){
        return num * 2;
    }
    var total = double(result);
    return total;
}
console.log('result outside', name);
add(23, 5);
console.log('result outside', result)

