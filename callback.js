function explain_callback(name, age, task){
    console.log('Hello '+ name);
    console.log('Your age ' + age);
    task()
    
}

function washHand(){
    console.log('Wash your hand with soap');
    
}
function takeShower(){
    console.log('Take shower')
}

explain_callback('Apel Mahmud', 21, washHand);
explain_callback('Sogir Uddin', 20, takeShower);