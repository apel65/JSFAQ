const normalPerson = {
  firstName: "Rohim",
  lastName: "Uddin",
  salery: 15000,
  getFullName: function () {
    console.log(this.firstName, this.lastName);
  },
  getCharge: function (amount, tips, tax) {
    console.log(this);
    this.salery = this.salery - amount - tips - tax;
    return this.salery;
  },
};

const friendlyPerson = {
  firstName: "Hero",
  lastName: "Golam",
  salery: 25000,
};

const heroAlom = {
  firstName: "Hero",
  lastName: "Alom",
  salery: 10000,
};

// normalPerson.getCharge.call(heroAlom, 500, 400, 200);
// console.log(heroAlom);

normalPerson.getCharge.apply(heroAlom, [1000, 300, 50]);
console.log(heroAlom);

// const friendlyPersonChargeBill = normalPerson.getCharge.bind(friendlyPerson);
// friendlyPersonChargeBill(2000);
// console.log(friendlyPerson)
// console.log(normalPerson.salery)

// const heroAlomChargeBill = normalPerson.getCharge.bind(heroAlom);
// heroAlomChargeBill(1000);
// console.log(heroAlom);

// normalPerson.getCharge(200);
// console.log(normalPerson)
