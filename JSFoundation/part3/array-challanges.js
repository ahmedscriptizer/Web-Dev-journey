/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"];

let firstTea = teaFlavors[0];
console.log(firstTea);

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = ["London", "Tokyo", "Paris", "New York"];

let favoriteCity = cities[2];
console.log(`faveroute city is : ${favoriteCity}`);

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/

let teaTypes = ["herbal tea", "white tea", "masala chai"];

console.log(`before changing name : ${teaTypes}`);

teaTypes[1] = "jasmine tea";
console.log(`After changing name : ${teaTypes}`);

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");

console.log(citiesVisited);

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];

teaOrders.pop();
console.log(teaOrders);

// what was the last order

let lastOrder = teaOrders.pop();

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/

// soft copy concept --> original wale ko modify karo gy to copy wala automatically ho jaye ga
// this concept is not aplicable for other variables

let popularTeas = ["green tea", "oolong tea", "chai"];

let softCopyTeas = popularTeas;
popularTeas.pop(); // for explaining the concept of soft copy
console.log(`copied array: ${softCopyTeas}`);

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ["Berlin", "Singapore", "New York"];
// to do hard copy we add ... before the array name

hardCopyCities = [...topCities];
topCities.pop();
console.log(hardCopyCities);

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["paris", "Rome"];
let asianCities = [" Tokyo", "bangkok"];

// let worldCities = europeanCities + asianCities     it turns out into string
// how did know that it turns into string ?  simply by using typeof

let worldCities = europeanCities.concat(asianCities);

console.log(`Merged array: ${worldCities}`);

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = ["masala chai", "oolong chai", "green tea", "earl grey"];

//     donot do this -> teaMenu.length()

let menuLength = teaMenu.length;
console.log(menuLength);

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("London"); // case sensitive. write exactly the same pattern of value what you wanna find.
console.log(isLondonInList);
