// debugger
// async function makeAsyncRequest() {
//     const url = 'https://dummyjson.com/users/?delay=5000'
//     const response = await fetch(url)
//     const data = await response.json()
//     return data;
// }
// makeAsyncRequest().then((data) => {
//     console.log(data)
// })


// async function  data () {
    // console.log('hello')
//     return 'hello'
// }
// data()

// async function getData() {
//     let res = await fetch("https://dummyjson.com/users")
//     console.log(res) // Promise
//     return res
// }
// getData()

async function getData() {
    try {
        let res = await fetch("https://wrong-url.com")
        let data = await res.json()
        console.log(data)
    } catch (error) {
        console.log("Error aaya:", error)
    }
}

getData()