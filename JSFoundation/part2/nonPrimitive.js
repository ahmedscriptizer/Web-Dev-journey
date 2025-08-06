// creating object
let obj = {}; // this is object
console.log(typeof obj);

let username1 = {
  FirstName: "Ahmed",
  LastName: "Ameer",
};

// Unique concept  ***vvimp
// if const obj, We can change the FirstName and LastName bcz they are primitives
// e.g:
const username = {
  FirstName: "Ahmed",
  LastName: "Ameer",
};

// accessing individual object
console.log(username.FirstName);

username.FirstName = "Spider";
username.MiddleName = "bin";
username.LastName = "Ali";
// console.log(username);

let username2 = {
  "First Name": "Iron",
  LastName: "Man",
};

// how to access "First Name" in username2 ?
// simple!! do the following :
console.log(username2["First Name"]);

// Inbuilt objects
let today = new Date();
// console.log(today.getDay());

// ********** ARRAYS ****************

let subjects = ['english','urdu','islamiyat'];
console.log(subjects[0]);



