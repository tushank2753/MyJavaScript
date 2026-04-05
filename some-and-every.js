// Example of some() for explaining How to work some()
debugger
let arr1 = [1,2,3,4,5]
let result1 = arr1.some(num1 => num1 / 2 === 1)
console.log(result1) // true

let arr2 = [1, 2, 3];
let result2 = arr2.some(num2 => num2 > 5);
console.log(result2); // false

// Example of every() for explaining How to work every()
let arr3 = [2,4,6]
let result3 = arr3.every(num3 => num3 % 2 === 0)
console.log(result3)

let arr4 = [2,4,6,9]
let result4 = arr4.every(num4 => num4 % 2 === 0)
console.log(result4)