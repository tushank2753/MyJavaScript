debugger
function greet(name, callback) {
  console.log("Hi " + name);
  callback();  // calling the callback function
}
function sayBye() {
  console.log("Goodbye!");
}
greet("Alice", sayBye);


function greetUser(name, callback) {
  console.log("Hello " + name);
  callback();
}
greetUser("Rahul", function () {
  console.log("Welcome to our website");
});