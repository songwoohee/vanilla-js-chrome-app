/*
# ToDo List - 기능 구현 및 저장 방법

# appendChild()
- appendChild()는 새로운 자식 요소를 부모 요소의 마지막에 추가하는 메서드. 생성된 요소나 기존 요소를 다른 요소의 자식으로 추가할 때 사용
# 변수 전달
paintTodo 함수는 newTodo라는 매개변수를 받아서 사용. 그런데 이 변수 newTodo는 handleTodoSubmit 함수에서 생성되어 paintTodo 함수에 인자로 전달

# 이벤트 타겟(e.target)
- e.target은 이벤트가 발생한 요소를 가리킴. 즉, 이벤트가 발생한 특정 요소를 참조할 수 있다.
- 예를 들어, 삭제 버튼(`❌`)을 클릭할 때, e.target은 그 버튼을 참조하게 된다.

# parentElement
- e.target.parentElement는 이벤트가 발생한 요소(버튼)의 부모 요소를 참조한다.
- 예시: 버튼 클릭 시, e.target은 클릭된 버튼이지만, e.target.parentElement는 그 버튼이 포함된 <li> 요소가 된다.

# 요소 삭제 (remove())
- remove()는 DOM에서 요소를 삭제하는 메서드
- e.target.parentElement.remove()로 클릭된 버튼의 부모 요소인 <li>를 삭제할 수 있다.

# 배열을 문자열로 변환하기 JSON.stringify()
- JSON.stringify() 메소드는 JavaScript 객체나 배열을 문자열 형태로 변환해준다.
*/

const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

// toDos 배열: 할 일 목록을 저장
const toDos = [];

// 로컬스토리지에 toDos 배열을 저장하는 함수
function savedToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos)); // 배열을 문자열로 변환하여 저장
}

// 할 일 삭제 함수
function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
}

// 새로운 할 일을 화면에 표시하는 함수
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

// 할 일 입력 후 제출 처리 함수
function handleTodoSubmit(e) {
  e.preventDefault(); // 기본 폼 제출 동작 방지
  const newTodo = todoInput.value; // 입력된 값 가져오기
  todoInput.value = ""; // 입력창 비우기
  toDos.push(newTodo); // 새로운 할 일을 toDos 배열에 추가, 이 배열은 로컬스토리지에 저장되어 페이지를 새로 고침해도 데이터가 유지됨
  paintTodo(newTodo); // 새로운 할 일 화면에 표시
  savedToDos(); // 로컬스토리지에 toDos 배열 저장
}

todoForm.addEventListener("submit", handleTodoSubmit);
