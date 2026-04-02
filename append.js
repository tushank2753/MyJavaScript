// const h1 = document.querySelector('h1')
// const container = document.querySelector(".container")
// const card = document.querySelector('.card')

// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))

// for (let i = 2; i <=100; i++) {
//     const newCard = card.cloneNode()
//     newCard.innerText = i
//     container.append(newCard)
// }


// create the elemnet


// const h1 = document.querySelector('h1')
// const container = document.querySelector('.container')
// const firstImage = document.querySelector("img")
// const paragraph = document.createElement('p')

// paragraph.innerText = 'Hello'
// paragraph.classList.add('my-para')
// container.append(paragraph)
// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))
// for (let i =1; i <= 100; i++) {
// const newImage = document.createElement('img')
// newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
// container.append(newImage)
// }


// for (let i = 1; i <= 12; i++) {
//     const imgContainer = document.createElement('div')
//     imgContainer.classList.add('img-container')
//     const newImg = document.createElement('img')
//     const newParagraph = document.createElement('p')
//     newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     newParagraph.innerText = i
//     imgContainer.append(newImg, newParagraph)
//     container.append(imgContainer)
// }


//  addevent listener
const container = document.querySelector('.container')
const card = document.querySelector('.card')

let i = 1
function copycard() {
    const newcontainer = document.createElement('div')
    newcontainer.innerText = i++;
    newcontainer.classList.add('card')
    container.append(newcontainer)
    // newcontainer.classList.remove(addon)

}
card.addEventListener("click" , copycard)

// const count =1
// container.addEventListener("click", ()=>{
//     const newcard = 

// })