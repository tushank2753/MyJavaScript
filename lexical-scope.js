function outer() {
    let name = "Rahul"

    function inner() {
        console.log(name)
    }
    inner()
}
outer()

function subtract() {
    const x = 15
    const z = 28

    function child() {
        console.log(x); // parent function ka variable
        console.log(z); // parent function ka variable
    }
    child()
}
subtract()