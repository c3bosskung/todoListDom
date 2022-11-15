import {todoUserInterface} from "./UI/todoList.js";
import {todoManagement} from "./lib/todoManagement.js";

//const todoUserInterface = require('./UI/todoList.js')
//const todoManagement = require('./lib/todoManagement.js')

let { showTodoItem, showNumberOfDone, showNumberOfNotDone } = todoUserInterface()
let { addTodo, removeTodo, findTodo, getTodos, getNumberOfDone, getNumberOfNotDone} = todoManagement();

const addButton = document.getElementById('addBtn')
const inputText = document.getElementById('todoValue')

showNumberOfDone(getNumberOfDone())
showNumberOfNotDone(getNumberOfNotDone())

let times = 0
addButton.addEventListener("click", () => {
    addTodo(inputText.value)
    showTodoItem(getTodos()[getTodos().length -1].getTodo().id,getTodos()[getTodos().length -1].getTodo().description)
    showNumberOfDone(getNumberOfDone())
    showNumberOfNotDone(getNumberOfNotDone())
    let setDone = document.getElementById(String(getTodos()[times].getTodo().id)).children[1]
    let removeButton = document.getElementById(String(getTodos()[times].getTodo().id)).children[2]
    setDone.addEventListener('click', ()=>{
        if(setDone.textContent === 'Not Done') {
            findTodo(parseInt(setDone.parentNode.id)).setDone(true)
            showNumberOfDone(getNumberOfDone())
            showNumberOfNotDone(getNumberOfNotDone())
            setDone.textContent = 'Done'
            console.log(findTodo(parseInt(setDone.parentNode.id)))
            console.log(setDone.parentNode.id)
        } else {
            findTodo(parseInt(setDone.parentNode.id)).setDone(false)
            showNumberOfDone(getNumberOfDone())
            showNumberOfNotDone(getNumberOfNotDone())
            setDone.textContent = 'Not Done'
            console.log(findTodo(parseInt(setDone.parentNode.id)))
            console.log(setDone.parentNode.id)
        }
    })

    removeButton.addEventListener('click', ()=>{
        times--
        console.log('remove from ' + removeButton.parentNode.id)
        removeTodo(parseInt(removeButton.parentNode.id))
        document.getElementById(removeButton.parentNode.id).remove()
        showNumberOfDone(getNumberOfDone())
        showNumberOfNotDone(getNumberOfNotDone())
        console.log(removeButton)
        console.log(getTodos())
    })
    times++
    console.log(times)
    // console.log(addDoneParent[times].children[1])
})


// addTodo('running')
// addTodo('sleeping')

// getTodos()[0].setDone(true)
// console.log(getTodos())


