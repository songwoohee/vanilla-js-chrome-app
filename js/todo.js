const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const toDos = [];

function savedToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);

  span.innerText = newTodo;
  todoList.appendChild(li);
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  toDos.push(newTodo);
  paintTodo(newTodo);
  savedToDos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

/*
appendChild 이 요소는 늘 마지막에 추가해야한다.
function deleteTodo(e) {
  console.log(e.target.parentElement);
}  -> target은 클릭된 HTML element 요소
  모든 html element는 하나 이상의 property를 가지고 있다.
  e.target은 클릭된 요소를 의미한다.
  e.target.parentElement는 클릭된 요소의 부모 요소를 의미한다.
  e.target.parentElement.remove()는 클릭된 요소의 부모 요소를 제거한다.

  3강
  브러우저가 가지고 있는 어떤 기능을 활용 -> 자바스크립트 객체나, 배열 등 어느것이든 string으로 바꿔준다. 
  JSON.stringify(toDos) -> 배열을 string으로 바꿔준다.
*/
