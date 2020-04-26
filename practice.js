
function person(name, age, task){
    console.log('Name is : ' + name);
    console.log('Age is : ' + age);
    task();
}

// function cricket(){
//     console.log('Play cricket');
// }

// function football(){
//     console.log('Play Football');
// }

// var apel = person('Apel Mahmud', 21, cricket);
// apel;

// var masum = person('Masum Billah', 22, football);
// masum;

// var riyad = person('Riyad Ahmed', 20, function(){
//     console.log('Play Hadudu');
// })

// riyad;


var arr = [3, 5, 3, 5, 67,7 ,4, 5, 4, 2];

var uniqueNum = [];

for (i = 0; i<arr.length; i++){
    var element = arr[i];
    var index = uniqueName.indexOf(element);
    
    if(index == -1){
        uniqueName.push(index)
    }
}





