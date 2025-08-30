let mystring = "Ahmed Ameer is King";
//  Accessing characters
console.log(mystring[4]);
console.log(mystring.charAt(4)); // since both are same
// Length
console.log(mystring.length);
//  Upper and Lower case
console.log(mystring.toLocaleUpperCase());
console.log(mystring.toLowerCase());
// Searching
console.log(mystring.indexOf("A")); // starts from left to right  -->
console.log(mystring.lastIndexOf("A")); // starts from right to left <--
// Extraction
console.log(mystring.slice(0, 5));
console.log(mystring.substring(0, 5));
// replacing
let str = "hi ahmed, hi ali ";
console.log(str.replace("/hi/g", "Salam")); // replace can works also with regex -> /hi/g or can be simply work just as replaceAll
console.log(str.replaceAll("hi", "JEO"));
// Splitting -- conversion of string to array
let fruits = "Apple,banana,oranges,Mangoe";
let words = fruits.split(",", 2);
console.log(words);
// Join -- conversion of array to string
let nutrients = ["Iron", "Potassium", "Cirtris", "VitaminC"];
let details = nutrients.join(" | ");
console.log(details);

// Trim -- remove whitespaces

let activity = "   Monkey is eating banana    ";
console.log(activity);
console.log(activity.trim());
console.log(activity.trimEnd());
console.log(activity.trimStart());
