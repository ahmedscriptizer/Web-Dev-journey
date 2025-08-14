let computer = { CPU: 12 };
let lenovo = {
  screen: "HD",
  __proto__: computer,
};
let Tomhardware = {};
// if you want to access any prototype of object or anything use .__proto__
//(__) -> is called dunder

// console.log(`computer`, computer.__proto__);

// this proto will show in browser not in terminal just like prompt

// console.log(`Lenovo`, lenovo.__proto__);

let genericCar = { tyre: 4 };

let tesla = { Driver: "AI" };
// Another method to give property of another object to your target object is following
Object.setPrototypeOf(tesla, genericCar);

console.log(`tesla`, Object.getPrototypeOf(tesla));
console.log(`tesla`, Object.hasOwn(tesla));
