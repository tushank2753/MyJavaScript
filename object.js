// const username1 = 'Anurag'
// let username2 = username1
// username2 = username2 + ' Singh'

const fruits = ['Mango', 'Apple', 'Orange']
// const myFruits = fruits
myFruits.push('Dates')
myFruits.push('Grapes')
// Object.assign(myFruits, fruits)

// const myFruits = [...fruits]
// const myFruits = [].concat(fruits)
const myFruits = fruits.slice()

// const user1 = {
//   firstName: 'Anurag',
//   lastName: 'Singh',
//   pata: {
//     city: 'Delhi',
//     pincode: 989888,
//   },
//   subject: ['Physics', 'CS', 'Maths']
// }

// // Shallow Copy

// const user2 = {}
// Object.assign(user2, user1)
// console.log(user2);

// const user2 = { ...user1 }
// const array = ['sameer','anurag','satyarth','satyarth','satyarth']
// const array2 = array
// array2.push('tushank')

// const user = {
//   name: 'Anurag',
//   city: 'Delhi',
//   pincode: 989888,
// }
// const user3 = {  ...user}
// user3.name = 'Sameer'
// const user3= user
// user3.name = 'Sameer'

// shallow copy
// const user4 = {}
// Object.assign(user4, user)
// user4.name = 'Sameer'