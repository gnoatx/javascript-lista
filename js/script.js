// console.log('lalalala')

// var hoisted = "i'm always available"
// let normal = "i reside here"
// const conservative = "i don't like change"

const input = document.querySelector("#task-adder")
const button = document.querySelector("#add-task")
const ul = document.querySelector("#task-list")
const taskCounter = document.querySelector("#counter-tasks")
const doneCounter = document.querySelector("#counter-done")
const credit = document.querySelector(".credit")

const empty = document.querySelector("#empty-list")

button.addEventListener('click', (event) => {
    event.preventDefault();

    if(!input.value) { // No JS, ! testa se o valor existe. Negação é !!
        return alert('A tarefa precisa ser preenchida')
    }

    if(window.getComputedStyle(empty, null).display != 'none') {
        empty.style.display = 'none'
    }

    const checkbox = `<input type="checkbox" />`
    const li = `<li class="task">
        <label class="checkbox">
            <input type="checkbox" class="check-area"/>
            <span class="checkmark"></span>
        </label>
        <span class="task-text">${input.value}</span>
    </li>`

    ul.innerHTML += li
    taskCounter.innerHTML += 1

    console.log(document.body.scrollHeight)
    console.log(window.innerHeight)

    if (document.body.scrollHeight > window.innerHeight) {
        console.log("???")
        credit.style.boxShadow = '0 0 10px #7d8071'
    }
})