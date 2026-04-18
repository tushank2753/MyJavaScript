// const image = document.querySelector('img')
// const button = document.querySelector('button')

// button.addEventListener('click', () => {
//   fetch('https://dog.ceo/api/breeds/image/random')
  
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json);
//       image.src = json.message
//     })
//     })



const image = document.querySelector('img')
const button = document.querySelector('button')

button.addEventListener('click', () => {
console.log("Button clicked");


  const start = Date.now();
  console.log("Blocking started");

  while (Date.now() - start < 5000) {
    // main thread blocked
  }
  console.log("Blocking finished");

  console.log("Fetch started");

  fetch('https://dog.ceo/api/breeds/image/random')
     .then((response) => {
      console.log("📥 Response received");
      return response.json();
    })
    
    .then((json) => {
      console.log(json);
      image.src = json.message;
    })
})