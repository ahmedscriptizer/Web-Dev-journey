class Vehical {
  constructor(company, model) {
    this.company = company;
    this.model = model;
  }

  message() {
    return `My Fav car is ${this.model} and company is ${this.company}`;
  }
}

class Bike extends Vehical {
  description() {
    return `My ${this.model} bike is hot product of ${this.company}`;
  }
}

let car = new Vehical("KIA", "Sportage");
console.log(car); // only constructor is called

console.log(car.message());

let bike = new Bike("YAMAHA", "R9");
console.log(bike.description());
