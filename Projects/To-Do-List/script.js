const checkBox = document.querySelectorAll('.checkmark')
const goalInput = document.querySelectorAll('.addgoal')
const progressBar = document.querySelector('.progressbar')


goalInput.forEach((task, index) => {
    task.addEventListener('input', (e) =>{
        localStorage.setItem(`taskName-${index}`, e.target.value)
    })
})

goalInput.forEach((task, index) => {
   task.value = localStorage.getItem(`taskName-${index}`)
})


checkBox.forEach((chekbox, index) => {
    chekbox.addEventListener('change', () => {
        if (chekbox.checked){
            goalInput[index].classList.add('linethroug')
        } else{
            goalInput[index].classList.remove('linethroug')
        }

        let count = 0
        checkBox.forEach((checkb) => {
            if (checkb.checked) {
                count++;
            }
        })
        let progress = `${ (count / checkBox.length) * 100}%`
        progressBar.style.width = progress
    })
})

checkBox.forEach((chekbox, index) => {
    if (chekbox.checked){
            goalInput[index].classList.add('linethroug')
        } 
})