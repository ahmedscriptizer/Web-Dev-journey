// Nested objects

const User = {
  UserfullName: {
    InApp: {
      LocalSaved: {
        name: "Muhammad Ahmed",
        last: "Ameer",
      },
    },
  },
};
console.log(User.UserfullName.InApp.LocalSaved.name);

// combining Objects

const obj1 = { name: "Ahmed", age: 21 };
const obj2 = { location: "Bahawalpur", Device: "Lenovo" };

let obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

// getting keys which is useful for DB, projects
//  v.vIMP

const Student = {
    name: "Muhammad Ahmed Ameer ",
    class: "Bscs 5b",
    Roll : 2315
}

let keys = Object.keys(Student);
console.log(keys);  // It gives an array 

