function outer(){
    let counter = 5;
    return function(){
        counter++;
        return counter;
    }
}

let increament = outer();
console.log(increament());
console.log(increament());

// what's clousure ?
// it is a function which remembers a context
//  means it remembers declared variables or anything-else and keep the context
//  A closure is created when a function “remembers” its lexical scope even when the function is executed outside of that scope.
// A closure gives you access to an outer function’s variables from an inner function, even after the outer function has finished executing.
