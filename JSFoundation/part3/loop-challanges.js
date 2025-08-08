// problem # 1
/* let sum = 0;
let i = 1;

while(i<=5){
    sum+=i;
    i++
}
console.log(sum); */

// problem # 2:

/* let countdown = [];
let i = 5;
while (i>=1) {    // (i > 0) also works well
    countdown.push(i);
    i--;
}
console.log(countdown); */

// problem # 3

/* let teaCollection = [];
let tea;

do {
    tea = prompt(`Enter tea type (enter stop to exit)`);

    if(tea !== "stop"){
        teaCollection.push(tea);
    }
} while (tea !=="stop"); */ // this code only runs on browser console

// problem # 4

/* let total = 0;
let i = 1;

do {
    total+=i;
    i++
} while (i <= 3);

console.log(total); */

// problem # 5

/* let array = [2, 4, 6];
let multiplied = [];

for (let i = 0; i < array.length; i++) {
  multiplied.push(array[i] * 2);
}
console.log(multiplied); */

// problem # 6

/* let cities = ["bwp", "isb", "lhr"];
let citieslist = [];

for (let j = 0; j < cities.length; j++) {
  citieslist.unshift(cities[j]);
}
console.log(citieslist); */
