// ================== Bind ============================
const person = {
  name: "Ahmed",
  greet() {
    console.log(`Hello there !, this is ${this.name}`);
  },
};

// normal function reference (loses "this")
const greetBind = person.greet;
greetBind(); // ❌ undefined "this"

// correct way with bind
const boundGreet = person.greet.bind(person);
boundGreet(); // ✅ "Hello there !, this is Ahmed"

// can change the name

const ChangeGreet = person.greet.bind({ name: "Tony Stark" }); // Inside parameter, we created new object
ChangeGreet();

// bind with arguments

function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

const User = {
  name: "Charlie",
};

const greetCharlie = greet.bind(User, "Hey");
greetCharlie("!!!");

//  Bind with partial function
// With bind(), you can create a partially applied function, where some arguments are preset.

function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(5)); // Output: 10

//  =================== call ==================================
const human = {
  name: "Tony Stark",
};

function intro(age, city) {
  console.log(`I am ${this.name}, ${age} years old, from ${city}.`);
}
// call executes immediately
intro.call(human, 45, "New York");
// "I am Tony Stark, 45 years old, from New York."

// ================= apply ==========================
const specie = {
  name: "Bruce Wayne",
};

function intro(age, city) {
  console.log(`I am ${this.name}, ${age} years old, from ${city}.`);
}

// apply executes immediately
intro.apply(specie, [40, "Pakistan"]);
// "I am Bruce Wayne, 40 years old, from Pakistan."
