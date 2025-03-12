const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODO_KEY = "todo";
let toDos = [];

function saveTodo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos)); //localStorage는 문자열로만 저장할 수 있어서 객체 배열을 저장하려면 JSON.stringify()를 사용해야 함.
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodo();
}

function newTodoList(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");

  button.innerText = "✔";
  button.addEventListener("click", deleteTodo);

  li.appendChild(button);
  li.appendChild(span);

  span.innerText = newTodo.text;
  todoList.appendChild(li);
}

function handleTodoSubmit(e) {
  e.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };

  toDos.push(newTodoObj);
  newTodoList(newTodoObj);
  saveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODO_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(newTodoList);
}
