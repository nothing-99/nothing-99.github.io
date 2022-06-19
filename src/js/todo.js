const todoForm = document.querySelector('.todo-container');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.todo-list');

const TODOS_KEY = 'todos';

let todos = [];
let loadedTodos = null;

function paintTodoInHtml(newTodo) {
  const $li = document.createElement('li');
  const $span = document.createElement('span');
  const $button = document.createElement('button');

  $li.id = newTodo.id;
  $span.innerText = newTodo.text;
  $button.innerText = '✔';

  $li.appendChild($button);
  $li.appendChild($span);

  todoList.appendChild($li);

  $button.addEventListener('click', (event) => {
    const removeTarget = event.target.parentElement;

    todos = todos.filter((li) => {
      if (+removeTarget.id === li.id) {
        return false;
      }
      return true;
    });

    console.log(todos);
    removeTarget.remove();

    saveTodos();
  })
}

/**
 * ToDo 에 대한 객체를 만들어 리턴한다
 * id: random
 * text: todo-String
 * 
 * @param {String} newTodo 
 * @returns {Object}
 */
function makeObj(newTodo) {
  return {
    id: Date.now(),
    text: newTodo 
  };
}

// todos 를 LocalStorage 에 저장한다.
function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

// LocalStorage 에 저장된 todos 가 있는지 확인 후 불러온다.
function loadTodos() {
  const loadedTodos = localStorage.getItem(TODOS_KEY);

  if (loadedTodos) {
    todos = JSON.parse(loadedTodos);
    todos.forEach(paintTodoInHtml);
  }
}

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const newTodo = makeObj(todoInput.value);
  
  todos.push(newTodo);
  todoInput.value = '';

  paintTodoInHtml(newTodo);

  saveTodos();
})

loadTodos();
