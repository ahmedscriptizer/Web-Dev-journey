// 1#
function makeTea(typeofTea) {
  return `Making ${typeofTea}`;
}
let teaOrder = makeTea("oolong tea");
// console.log(teaOrder);

// 2#

function orderTea(teaType) {
  function confirmOrder() {
    return `"${teaType}Order confirm for chai";`;
  }
  return confirmOrder();
}
let chai = orderTea("Chocolate chai");
// console.log(chai);

// 3# arrow functions

const calTotal = (price, quantity) => price * quantity; // It's called implicit return => if we have only one line to return then we just ignore return keyword and write the return logic in one line

let totalcost = calTotal(499, 100);

// 4# Higher order functions

function makeTea(teaname){
  return `I like ${teaname}`
}

function processTeaOrder(teaFunction){
  return teaFunction("earl tea");
}

let result = processTeaOrder(makeTea);
// console.log(result);

// 5# 

function createTeaMaker(){
  return function(teaType){
    return `Making ${teaType}`
  }
}

let teaMaker = createTeaMaker()
let result1 = teaMaker("coffee")
// console.log(teaMaker("Coffe"));
console.log(result1);

