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
// console.log(car); // only constructor is called

// console.log(car.message());

let bike = new Bike("YAMAHA", "R9");
// console.log(bike.description());

//****************Encapsulation***************

class BankAccount {
  #balance = 0; //# makes it private
  deposit(amount) {
    this.#balance += amount;
  }
  getbalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
account.deposit(55000);
// console.log(account.getbalance());

//  ************ Abstraction ******************

class CoffeeMachine {
  start() {
    return `Starting the machine...`;
  }
  brew() {
    return `Brewing the coffee`;
  }

  PressStartBtn() {
    let msg1 = this.start();
    let msg2 = this.brew();

    return `${msg1} \n ${msg2}`;
  }
}

let cup = new CoffeeMachine();
// console.log(cup.start());
// console.log(cup.brew());
// console.log(cup.PressStartBtn());

//  ********* Polymorphism ***************

class Bird {
  fly() {
    return `can Fly`;
  }
}

class Hen extends Bird {
  fly() {
    return `cannot fly`;
  }
}

let sparrow = new Bird();
let hen = new Hen();

// console.log(sparrow.fly());
// console.log(hen.fly());

// *************** static **************

class Calculate{
  static add(num1,num2){
    return num1 + num2;
  }
}

console.log(Calculate.add(5, 8));

// Getters Setters

class Employee{
  constructor(name, salary){
    this.name = name;
    this._salary = salary
  }

  get salary(){
    return `this is my ${this._salary}`
  }
  set salary(value){
    this._salary = value;
  }
}

let pep = new Employee ("Ali", 50000);
console.log( pep.name,pep._salary); // getting values from constructor 
//  To access getter setter values we do the following

// for getter
console.log(pep.salary);
// for setter
pep.salary = 20
console.log(pep.salary);

