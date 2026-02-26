// Function Definition
debugger
function introduceMe(username, profession, age) {
    console.log(typeof username);
    console.log(typeof profession);
    console.log(typeof age);
    console.log('Hi,');
    console.log(`My name is ${username || 'Procodrr'}.`);
    console.log(`I am a ${profession}`);
    console.log(`I am ${age} years old.`); 
}
introduceMe()


// Function Call
// const returnValue = introduceMe()
// introduceMe('Anurag', 'Software Engineer', 25)
// introduceMe('Akash', 'Mechanical Engineer', 27)

// function introduceMe() {
// console.log('hi');
// console.log('my name is sameer ');
// console.log('i am a software engineer');
// console.log('i am 25 years old');
// return 0
// }
// introduceMe()