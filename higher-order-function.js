debugger
// function greet(name) {
//   console.log("Hello " + name);
// }
// function processUser(callback) {
//   callback("Rahul");
// }
// processUser(greet);


function calculate(a, b, operation) {
    return operation(a, b)
}
function add(x, y) {
    return x + y
}
function multiply(x, y) {
    return x * y
}
console.log(calculate(5, 3, add))
console.log(calculate(5, 3, multiply))

console.log("Program End")