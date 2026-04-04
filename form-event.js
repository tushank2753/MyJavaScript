const usernameInput = document.querySelector('#username')
const paragraph = document.querySelector('p')
const form = document.querySelector('form')

// usernameInput.addEventListener('click',() => {
//     console.log('input click')
// })

// usernameInput.addEventListener('dblclick',() => {
//     console.log('input dblclick');
// })

// let inputValue
// usernameInput.addEventListener('input',(event)=>{
//     console.log(event.target.value)
//     paragraph.innerText=event.target.value
// })

// 
//  usernameInput.addEventListener('change',(e)=>{
//     console.log(e);
//     inputValue=e.target.value;
//     paragraph.innerText=e.target.value
//  })

//    usernameInput.addEventListener('focus',(e)=>{
//     console.log(e.type)
//     console.log(e)
//     inputValue=e.target.value
//     paragraph.innerText=e.target.value
//   })

    // usernameInput.addEventListener('blur',(e)=>{
    //     console.log(e.type)
    //     console.log(e)
    //     inputValue=e.target.value
    //     // paragraph.innerText=e.target.value
    // })

// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const myFormData = new FormData(form)

//     const data = {}

//     myFormData.forEach((value, key) => {
//         data[key] = value
//     })
//     console.log(data)
// })

// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     const dataForm = new FormData(form)
//     for(const p of dataForm.entries()){
//         console.log(p)

//     }
// })

// form.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log(e);
//     // console.log('From Clicked');
// })

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log(e);
//     console.log('From Submitted');
// })