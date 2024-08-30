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
        return alert('A tarefa precisa ser preenchida.')
    }

    if(input.value.length > 65) {
        return alert('A tarefa é muito longa. Caracteres máximos: 65')
    }

    if(window.getComputedStyle(empty, null).display != 'none') {
        empty.style.display = 'none'
    }

    // const checkbox = `<input type="checkbox" />`
    const li = `<li class="task post-click">
        <label class="checkbox" onchange="checkUncheck(this)">
            <input type="checkbox" class="check-area"/>
            <span class="checkmark"></span>
        </label>
        <span class="task-text">${input.value}</span>
    </li>`

    const count = parseInt(taskCounter.innerHTML)

    if(count >= 99) {
        return alert('Número máximo de tarefas. Exclua algumas tarefas.')
    }

    input.classList.add('post-click')

    ul.classList.add('post-click')

    setTimeout(() => { input.classList.remove('post-click') },300)

    setTimeout(() => { input.value = '' }, 300)

    setTimeout(() => { ul.classList.remove('post-click') }, 300)

    setTimeout(() => { ul.insertAdjacentHTML("afterbegin", li) }, 300)

    const newTask = ul.children.item(0)

    newTask.classList.remove('post-click')

    taskCounter.innerHTML = count + 1

    if (document.body.scrollHeight > window.innerHeight) {
        credit.style.boxShadow = '0 60px 15px 50px #7d8071'
    }
})

function checkUncheck(label) {
    const count = parseInt(doneCounter.innerHTML)

    const checkbox = label.children.item(0)

    console.log(checkbox.checked)

    if(checkbox.checked) {
        doneCounter.innerHTML = count + 1
    } else {
        doneCounter.innerHTML = count - 1
    }
}