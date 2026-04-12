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

checkBox.forEach((checkbox, index) => {
    const savevalue = localStorage.getItem(`checkbox-${index}`)
    if(savevalue === 'true'){
        checkbox.checked = true
        goalInput[index].classList.add('linethrough')
    }

    checkbox.addEventListener('change', () => {
        localStorage.setItem(`checkbox-${index}`, checkbox.checked)

        if (checkbox.checked){
            goalInput[index].classList.add('linethrough')
        } else{
            goalInput[index].classList.remove('linethrough')
        }
        updateprogress() 
    })
})

function updateprogress(){
    let count = 0
    checkBox.forEach((checkb) => {
        if (checkb.checked) {
            count++;
        }
    })
    let progress = `${ (count / checkBox.length) * 100}%`
    progressBar.style.width = progress
}
updateprogress()
