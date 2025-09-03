const sym = Symbol();
const JsUser = {
  name: "Ahmed",
  age: 21,
  "full name": "Muhammad Ahmed Ameer",
  Id: 215,
  [sym]: "mykey1",
};

JsUser.greeting = function () {
  console.log("Hello user !");
};
console.log(JsUser.greeting());

JsUser.greetingTwo = function () {
  console.log(`Hello ${this["full name"]}`);
};
console.log(JsUser.greetingTwo());
