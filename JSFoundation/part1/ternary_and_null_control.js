// ===== Nullish Coalescing Operator (??) : null undefined ====
let val1;
// val1 = 5 ?? 10;

// val1 = null ?? 10;

// val1 = undefined ?? 10;

// val1 = undefined ?? function(){
//     return 10;
// }

// val1 = null ?? 10 ?? 20;

console.log(val1);
// console.log(val1());

// ========== Ternary operator ===================
//  syntax : condition ? true : false

let IceCream = 100;
IceCream <= 80 ? console.log("less than 80") : console.log("More then 80");
