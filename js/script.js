// console.log('lalalala')

// var hoisted = "i'm always available"
// let normal = "i reside here"
// const conservative = "i don't like change"

const input = document.querySelector("#task")
const button = document.querySelector("#button_create")
const ul = document.querySelector(".task-list")

button.addEventListener('click', (event) => {
    event.preventDefault();

    if(!input.value) { // No JS, ! testa se o valor existe. Negação é !!
        return alert('A tarefa precisa ser preenchida')
    }

    const checkbox = `<input type="checkbox" />`
    const li = `
    <li class="task-item">
        ${checkbox}
        <p>${input.value}</p>
    </li>`

    ul.innerHTML += li
})