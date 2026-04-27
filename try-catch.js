// async function makeAsyncRequest() {
//     try {
//         const url = 'https://dummyjson.com/users/?delay=1000'
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log(data)
//         return data;
//     } catch(err){
//         console.log(err)
//     }
// }
// makeAsyncRequest()


async function makeAsyncRequest1() {
    try {
        const url = 'https://dummyjson.com/users/?delay=1000'
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        // console.log(data.users[0].firstName,data.users[0].lastName,data.users[0].age)
        // console.log(`My Name ${data.users[0].firstName} ${data.users[0].lastName} and My age ${data.users[0].age}`)
        const p = document.createElement('p')
        p.innerHTML = `
            ${data.users[0].firstName}
            ${data.email}
            ${data.users[0].age}
        `
         document.body.appendChild(p)
        return data;
    } catch(err){
        console.log(err)
    }
}
makeAsyncRequest1()