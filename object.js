// const username1 = 'Anurag'
// let username2 = username1
// username2 = username2 + ' Singh'


// This is example of deep copy in which No Changes if i want to changes in another Array or object.
// Arrya Example

// const myFruits = ['Mango', 'Apple', 'Orange'] // This is Example of Deep copy
// const fruits = myFruits
// fruits.push('Dates')
// myFruits.push('Grapes')
// console.log(fruits) // Result:- ['Mango', 'Apple', 'Orange', 'Grapes', 'Dates']
// console.log(myFruits) // Result:- ['Mango', 'Apple', 'Orange', 'Grapes', 'Dates']

// const fruits = ['Mango', 'Apple', 'Orange']  // This is shallow copy Example one using Object.assign
// const myFruits = []
// Object.assign(myFruits, fruits)
// myFruits.push('Grapes')
// myFruits.push('Dates')

// const fruits = ['Mango', 'Apple', 'Orange']  // This is shallow copy Example two using ...operator called spraed Operator
// const myFruits = [...fruits]
// myFruits.push('Grapes')
// myFruits.push('Dates')

// const myFruits = [].concat(fruits)
// const myFruits = fruits.slice()


// Object Example for Understanding Shallow Copy

// const user1 = {
//     firstName: 'Anurag',
//     lastName: 'Dheeman',
//     pata: {
//         city: 'Delhi',
//         pincode: 989888,
//     },
//     subject: ['Physics', 'CS', 'Maths']
// }
// // Shallow Copy using Object.assign
// const user2 ={}
// Object.assign(user2, user1)
// user2.firstName = 'Tushank'

// // Shallow Copy using ... Spread Operator
// const user2 ={...user1}
// user2.lastName = 'kumar'
// user2.firstName = 'Tushar'



// const user = {
//   name: 'Anurag',
//   city: 'Delhi',
//   pincode: 989888,
// }
// const user3 = {  ...user}
// user3.name = 'Sameer'
// // const user3= user
// user3.name = 'Sameer'

// // shallow copy
// const user4 = {}
// Object.assign(user4, user)
// user4.name = 'Sameer'