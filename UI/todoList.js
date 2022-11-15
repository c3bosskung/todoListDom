// const todoManage = require('../lib/todoManagement.js')

function todoUserInterface() {
  function showTodoItem(newId, newDescription) {
    let listTodo = document.getElementById("listTodo")
    const newTodo = document.createElement("div")
    newTodo.setAttribute('class', 'todoItem')
    newTodo.setAttribute('id', newId)

    const pElement = document.createElement('p')
    pElement.textContent = newDescription

    const button1 = document.createElement('button')
    button1.textContent = 'Not Done'

    const button2 = document.createElement('button')
    button2.textContent = 'remove'

    newTodo.appendChild(pElement)
    newTodo.appendChild(button1)
    newTodo.appendChild(button2)

    listTodo.appendChild(newTodo)
  }
  function showNumberOfDone(numberOfDone) {
    const countDone = document.getElementById('done')
    countDone.textContent = "Number of Done:" + numberOfDone
  }
  function showNumberOfNotDone(numberOfNotDone) {
    const countDone = document.getElementById('notDone')
    countDone.textContent = "Number of Not Done:" + numberOfNotDone
  }
  return { showTodoItem, showNumberOfDone, showNumberOfNotDone }
}
//module.exports = todoUserInterface
export {todoUserInterface}