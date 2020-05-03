
const normalPerson = {
    firstName: 'Rohim',
    lastName: 'Uddin',
    salery: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    getCharge: function(amount){
        this.salery -= amount;
        return this.salery;
    }
}

normalPerson.getCharge(150);
normalPerson.getCharge(3000);
console.log(normalPerson.salery);
