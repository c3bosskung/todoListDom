import {Todo} from "./todo.js";

//const Todo = require('./todo.js')

function todoManagement() {
  let todos = []
  function addTodo(desc) {
    todos.push(new Todo(desc))
    return todos[todos.length - 1].id;
  }
  function removeTodo(removeId) {
    todos = todos.filter((todo) => todo.id !== removeId)
  }
  function findTodo(searchId) {
    return todos.find((todo) => todo.id === searchId)
  }
  function getTodos() {
    return todos
  }
  function getNumberOfDone() {
    let countDone = 0
    for (const todo of todos) {
      if(todo.getTodo().done) {
        countDone++
      }
    }
    return countDone;
  }
  function getNumberOfNotDone() {
    let countNotDone = 0
    for (const todo of todos) {
      if(!todo.getTodo().done) {
        countNotDone++
      }
    }
    return countNotDone;
  }

  return {
    addTodo,
    removeTodo,
    findTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone
  }
}
//module.exports = todoManagement

export {todoManagement}