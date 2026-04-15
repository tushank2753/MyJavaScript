function makecallbackhell (method, url, callback){
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'
    xhr.addEventListener('load', () => {
        callback(xhr.response)
    })
    xhr.open(method, url)
    xhr.send()
}
makecallbackhell('GET', 'https://dummyjson.com/users', (data) => {
    makecallbackhell('GET', `https://dummyjson.com/posts/user/${data.users[0].id}`, (postdata) => {
        makecallbackhell('GET',`https://dummyjson.com/comments/post/${postdata.posts[0].id}`, (commentdata) => {
            makecallbackhell('GET',`https://dummyjson.com/users/${commentdata.comments[0].user.id}`, () => {
                makecallbackhell('GET', `https://dummyjson.com/posts/user/${commentdata.comments[0].user.id}`, (postdatas) => {
                    makecallbackhell('GET', `https://dummyjson.com/comments/post/${postdatas.posts[0].id}`, (commentdatas) => {
                        console.log(commentdatas)
                    })
                })
            })
        })
    })
})