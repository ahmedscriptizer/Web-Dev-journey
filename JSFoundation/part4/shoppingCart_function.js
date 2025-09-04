// The problem is how that user adds how many items in cart which i have to pass to price function ?
//  Solution : We use rest operator (spread operator in function's parameter is called rest operator)

function ShoppingCartPrice(...num) {
  return num;
}
let TotalPrice = ShoppingCartPrice(500, 780, 120, 400);
console.log(TotalPrice);

function ShoppingCartPrice2(val1, val2, ...num) {
  return num;
}
let TotalPrice2 = ShoppingCartPrice2(500, 780, 120, 400);
console.log(TotalPrice2);
