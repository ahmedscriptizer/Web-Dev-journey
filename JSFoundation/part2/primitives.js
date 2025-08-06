let balance = 120;
// how to check type of variable
console.log(typeof balance);

// another method to assign but it is not recommended
let anotherBalance = new Number(150);
console.log(typeof anotherBalance);

// null and undefined

let username;
let username1 = null;
console.log(username);
console.log(username1);

// string

let msg = "hello";
let msg1 = "hola";
let msg2 = "Ahmed";

// traditional method
let oldGreet = msg + " ahmed";
console.log(oldGreet);

// new method to combine msg
let newGreet = `Hello ${msg2}`;
console.log(newGreet);

let demo = `value is ${2 * 2}`; // we can perform arithmatic also
console.log(demo);

// symbol

let sm1 = Symbol();
let sm2 = Symbol();

// These Symbols seems equal but trust me they are not ! although they have same type Symbol
console.log(sm1 == sm2);

let sm3 = Symbol("Ahmed");
let sm4 = Symbol("Ahmed");

console.log(sm3 == sm4); // because they are unique they never becomes equal
