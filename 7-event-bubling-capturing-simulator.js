const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')


// window.addEventListener('click', (e) => {
//     console.log('6. Window Event Listener');
// }, {capture: false})

// document.addEventListener('click', (e) => {
//     console.log('5. Document Event Listener');
// }, {capture: false})

// document.body.addEventListener('click', (e) => {
//     console.log('4. Body Event Listener');
// }, {capture: false})

green.addEventListener('click', (e) => {
    console.log('3. Green Event Listener');
}, {capture: false})

pink.addEventListener('click', (e) => {
    console.log('2. Pink Event Listener');
}, {capture: false})

blue.addEventListener('click', (e) => {
    console.log('1. Blue Event Listener');
}, {capture: false}, {once: true})

// blue.addEventListener('click', (e) => {
//     // e.stopPropagation()
//     console.log('1. Blue Event Listener');
// }, {capture: false})





// const addCardBtn = document.querySelector('.add-card')
const container = document.querySelector('.container')

const cardsList = document.querySelector('#addon')

let count = 1

cardsList.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

// container.addEventListener('click', (e) => {
//     if(e.target !== container) {
//         e.target.remove
//     }
// })