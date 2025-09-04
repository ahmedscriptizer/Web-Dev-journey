function user(name) {
  this.name = name;
}

user.prototype.greeting = function () {
  console.log(`Hello ${this.name}, You are doing best, keep going`);
};

let Ahmed = new user("Ahmed");
console.log(typeof Ahmed);
Ahmed.greeting();
