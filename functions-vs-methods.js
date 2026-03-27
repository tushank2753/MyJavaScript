// // Function definition with Example
// // Function JavaScript me ek reusable block of code hota hai jo ek specific kaam karta hai. Ye independently likha jata hai, kisi object ka part nahi hota.
// function fn1 (name) {
//     console.log("Hello" + name)
// }
// fn1("Tushank");

// function fn2(a, b){
//     console.log(a + b)
// }
// fn2(4, 5);


// // Method defintion with Example
// // Method ek function hi hota hai lekin jab wo kisi object ke andar define hota hai, tab usse method kehte hain.
// const Obj = {
//     name : "tushank",
//     fnname : function(){
//         console.log("hello" + this.name)
//     }
// }
// Obj.fnname()

// const calculator = {
//   add: function(a, b) {
//     return a + b;
//   }
// };
// console.log(calculator.add(4, 6));



debugger
// const add1 = (...nums) => {
//   let sum = 0
//   for (let i = 0; i < nums.length; i++) {
//     sum = sum + nums[i]
//   }
//   return sum
// }
// console.log(add1(3,45,7,9))
// const add3 = function () {
//   let sum = 0
//   for (let i = 0; i < arguments.length; i++) {
//     sum = sum + arguments[i]
//   }
//   return sum
// }

// const add = function () {
// const a =arguments[0] 
// const b = arguments[1]
// const c = arguments[2]
// const d = arguments[3]
// const e = arguments[4]
// return a + b + c + d + e

// }



// console.log(add(1, 2, 3, 4, 5));





const nums = [1, 2, 3];

const result = nums.map((num) => {
  return num * 2;
});

console.log(result);