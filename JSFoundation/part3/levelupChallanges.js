// 1#

let array = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] === "chai") {
    break;
  }
  selectedTeas.push(array[i]);
}
// console.log(selectedTeas);

// 2#

let cities = ["london", "new york", "paris", "berlin"];
let visitedcities = [];

for (let j = 0; j < cities.length; j++) {
  if (cities[j] === "paris" || cities[j] === "Paris") {
    continue;
  }
  visitedcities.push(cities[j]);
}
// console.log(visitedcities);

// 3 #

let Num = [1, 2, 3, 4, 5];
let SelectedNum = [];

for (const point of Num) {
  if (point === 4) {
    break;
  }
  SelectedNum.push(point);
}
// console.log(SelectedNum);

// 4 #

let teaArray = ["Green tea", "Black tea", "Herbal tea"];
let preferredTeas = [];

for (const element of teaArray) {
  if (element === "herbal tea" || element === "Herbal tea") {
    continue;
  }
  preferredTeas.push(element);
}
// console.log(preferredTeas);

// 5# for-in

let cityArray = {
  barca: 20000,
  berlin: 50000,
  tokyo: 880000,
  korea: 670000,
};

let selectedCities = {};

for (const key in cityArray) {
  // key set: value assigning to that key
  if (cityArray[key] > 50000) {
    selectedCities[key] = cityArray[key];
    // property name    =  value
    // barca            =  20000
  }
}
// console.log(selectedCities);

// 6 #

let worLdCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};
let largeCities = {};

for (const i in worLdCities) {
  if (worLdCities[i] < 3000000) {
    continue;
  }
  largeCities[i] = worLdCities[i];
}
// console.log(largeCities);

// problem # for each

let mycities = ["berlin", "tokyo", "sydney", "paris"];
//skip sydney and store other cities in new array
let newcities = [];

mycities.forEach((city) => {
  if (city === "sydney") {
    return;
  }
  newcities.push(city);
});
// console.log(newcities);

// another way of writing function
let mycities1 = ["berlin", "tokyo", "sydney", "paris"];
//skip sydney and store other cities in new array
let newcities1 = [];

mycities.forEach(function (city) {
  if (city === "sydney") {
    return;
  }
  newcities1.push(city);
});
// console.log(newcities1);

// problem #

let numbers = [2,5,7,9]
let doubleNum = []

for(let i = 0; i<numbers.length; i++){
  if(numbers[i] === 7){
    continue;
  }
  doubleNum.push(numbers[i]*2);
}
// console.log(doubleNum);

// problem # 

let chaicol = ["green tea", "black tea", "jasmine tea", "herbal tea"]
let shortTeas = []

for (const cc of chaicol) {
  if (cc.length > 10){
    break;
  }
  shortTeas.push(cc);
}

// console.log(shortTeas);

