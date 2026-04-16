// const resolve = document.querySelector('#resolve')
// const reject = document.querySelector('#reject')


// const p = new Promise((res, rej) => {
//     resolve.addEventListener('click', () => {
//         res('Farheen')
//         console.log(p)
//     })
//     reject.addEventListener('click', () => {
//         rej('Juli')
//         console.log(p)
//     })
// })
// console.log(p)

// function makecallbackhell (method, url){
//     const xhr = new XMLHttpRequest()
//     xhr.responseType = 'json'
//     const promise = new Promise ((resolve , reject) => {
//     xhr.addEventListener('load', () => {
//         resolve(xhr.response)
//     })
//     xhr.addEventListener('error', () => {
//         reject('request failed')
//     })
// })
// xhr.open(method, url)
// xhr.send()
// return promise
// }

// makecallbackhell('GET', 'https://dummyjson.com/users')
// .then((data) =>  makecallbackhell('GET', `https://dummyjson.com/posts/user/${data.users[0].id}`))
// .then((postdata) =>  makecallbackhell('GET',`https://dummyjson.com/comments/post/${postdata.posts[0].id}`))


function makecallbackhell(method, url) {
    const xhr = new XMLHttpRequest
    xhr.responseType = 'json'
    const promise = new Promise((resolve, reject) => {
        xhr.addEventListener('load', () => {

            resolve(xhr.response)
        })
        xhr.addEventListener('error', () => {
            reject('request failed')
        })

    })
    xhr.open(method, url)
    xhr.send()
    return promise
}

makecallbackhell('GET', 'https://dummyjson.com/users')


    .then((data) => makecallbackhell('GET',`https://dummyjson.com/posts/${data.users[0].id}`))
    .then((postdata) => makecallbackhell('GET',`https://dummyjson.com/posts/tag/${postdata.tags[1]}` ))
    // .then((tagesdata) => makecallbackhell('GET','https://dummyjson.com/))