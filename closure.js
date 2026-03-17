debugger
function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}
const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3

// Returning Function with Closure
function bankAccount() {
  let balance = 1000;
  return function deposit(amount) {
    balance += amount;
    console.log(balance);
  }
}
const myAccount = bankAccount();
myAccount(500); // 1500
myAccount(200); // 1700

// Returning Function with Closure
function multiplier(x) {
    function multiply(y) {
        return x * y
    }
    return multiply
}
const double = multiplier(2)
console.log(double(5))
console.log(double(10))