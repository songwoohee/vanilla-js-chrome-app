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
let toDos = [];

const TODOS_KEY = "todos";

// 로컬스토리지에 toDos 배열을 저장하는 함수
function savedToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 배열을 문자열로 변환하여 저장
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

function sayHello(i) {
  console.log("this is the turn of", i);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach((item) => console.log("this is the turn of", item));
}

/*
📌 forEach()란?
`forEach()`는 배열의 각 요소를 순차적으로 순회하면서 주어진 함수를 실행하는 메서드
즉, 배열에 있는 모든 요소에 대해 콜백 함수를 한 번씩 실행
💡 기본 사용법
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num) {
  console.log(num); // 1, 2, 3, 4, 5 출력
});

✅ `forEach()`의 동작
1️⃣ 배열 `numbers`에 있는 요소를 하나씩 가져옴
2️⃣ 가져온 요소를 콜백 함수의 매개변수 (`num`)로 전달
3️⃣ `console.log(num)`이 실행되어 각각 출력됨

📌 내 코드에서 `forEach()`가 하는 역할
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  console.log(parsedToDos);
  parsedToDos.forEach(sayHello);
}

✅ 동작 순서
1️⃣ `savedToDos`는 `localStorage`에서 가져온 JSON 문자열
2️⃣ `JSON.parse(savedToDos)`를 통해 배열 (`parsedToDos`)로 변환
3️⃣ `parsedToDos.forEach(sayHello);`
- 배열의 각 요소를 하나씩 꺼내면서 `sayHello` 실행
- `sayHello()`는 `console.log("hi!!!!!!")`를 실행
- 배열 길이만큼 `"hi!!!!!!"`가 출력됨

📌 화살표 함수 (Arrow Function) 정리
화살표 함수(Arrow Function)는 ES6(ECMAScript 2015)에서 도입된 더 간결한 함수 표현 방식
특히 콜백 함수를 사용할 때 코드가 짧아지고 가독성이 좋아진다
✅ 기본 문법
1️⃣ 기존의 일반 함수 표현 (Function Expression)
const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3)); // 5
2️⃣ 화살표 함수로 변환
const add = (a, b) => {
  return a + b;
};
console.log(add(2, 3)); // 5

👉 차이점:
- `function` 키워드를 생략하고,
- 매개변수 뒤에 `=>` (화살표) 추가

✅ 화살표 함수는 코드가 간결해지고 가독성이 좋아짐
✅ forEach(), map(), filter() 같은 고차 함수에서 유용함
✅ this가 부모 스코프를 유지 (객체 메서드엔 부적합)
✅ 함수 본문이 한 줄이면 return 생략 가능 (암시적 반환)
--------------------------------------------------------------------------
📌 로컬 스토리지에 Todo 목록 유지하기
문제: 새로 추가한 Todo가 새로고침 후에도 유지되게 하려면, 기존에 저장된 Todo 목록을 로컬 스토리지에서 가져와야 한다.
✅ 1. toDos 배열을 let으로 선언
이전에는 const toDos = []로 선언되어, 새로고침 후 배열의 상태가 초기화되었다.
let으로 변경하면 배열을 재할당할 수 있어서, 새로고침 후에도 기존 Todo 목록을 유지할 수 있다.
let toDos = []; // const에서 let으로 변경
✅ 2. 로컬 스토리지에서 기존 Todo 목록 불러오기
로컬 스토리지에서 기존 Todo 목록을 가져와서, 페이지가 새로고침될 때 이전 목록이 유지되도록 한다.
const savedToDos = localStorage.getItem(TODOS_KEY); // 로컬 스토리지에서 데이터 가져오기
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // JSON 문자열을 배열로 변환
  toDos = parsedToDos; // 기존 배열에 덮어쓰기
  parsedToDos.forEach(paintTodo); // 기존 Todo 목록을 화면에 그리기
}
✅ 3. 새 Todo 추가 후 로컬 스토리지에 저장
새로운 Todo가 추가되면, toDos 배열에 추가된 Todo를 로컬 스토리지에 다시 저장한다.
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // toDos 배열을 로컬 스토리지에 저장
}
🎯 정리
let으로 toDos 배열을 선언하여 새로고침 후에도 Todo 목록을 유지.
localStorage.getItem으로 로컬 스토리지에서 데이터를 가져오고, JSON.parse로 배열로 변환 후 화면에 표시.
------------------------------------------------------------------------------------------
📌 forEach()와 filter() 차이 및 활용 예시
✅ 1. forEach()의 동작 원리
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}

📌 동작 방식
forEach()는 parsedToDos 배열의 각 요소를 순회하면서 paintTodo() 함수를 실행
paintTodo() 함수가 실행되면서 To-Do 항목이 화면에 표시됨
forEach()는 단순히 배열을 반복(iterate)할 뿐, 새로운 배열을 반환하지 않음
✅ 2. filter()의 동작 방식
📌 filter()란?
forEach()와 비슷하게 배열의 각 요소를 반복(iterate) 하지만,
조건을 만족하는 요소만 남기고 새로운 배열을 반환
기존 배열을 변경하지 않음
📌 filter() 함수 예시
🔹 숫자 배열 필터링 예시
function sexyFilter(num) {
  return num !== 3; // 3을 제외한 나머지 값만 남김
}

const numbers = [1, 2, 3, 4];
const filteredNumbers = numbers.filter(sexyFilter);

console.log(filteredNumbers); // [1, 2, 4]

📌 동작 방식
filter()는 배열을 반복하면서 각 요소를 sexyFilter() 함수에 전달
sexyFilter(1) → true → 배열에 포함
sexyFilter(2) → true → 배열에 포함
sexyFilter(3) → false → 배열에서 제외
sexyFilter(4) → true → 배열에 포함
최종 결과: [1, 2, 4]
✅ 3. filter()를 문자열 배열에 적용하기
const arr = ["pizza", "banana", "tomato"];

function sexyFilter(food) {
  return food !== "banana"; // "banana"를 제외한 나머지 값만 남김
}

const filteredArr = arr.filter(sexyFilter);
console.log(filteredArr); // ["pizza", "tomato"]

📌 동작 방식
"banana"를 제외한 "pizza"와 "tomato"만 남음
✅ 4. filter()를 객체 배열에 적용하기
const todos = [{ text: "hi" }, { text: "potato" }];

function sexyFilter(todo) {
  return todo.text !== "potato"; // "potato"가 아닌 요소만 남김
}

const filteredTodos = todos.filter(sexyFilter);
console.log(filteredTodos); // [{ text: "hi" }]

📌 동작 방식
filter()는 객체 배열도 다룰 수 있음
"text" 값이 "potato"가 아닌 요소만 남김

🎯 정리
✅ forEach()는 배열을 반복하면서 특정 동작을 수행하지만, 새로운 배열을 반환하지 않음
✅ filter()는 조건을 만족하는 요소만 남긴 새로운 배열을 반환
✅ 기존 배열은 변경되지 않고 필요한 요소만 포함하는 새로운 배열을 생성
✅ To-Do 리스트에서 특정 요소를 제거하거나 필터링할 때 유용하게 사용 가능
----------------------------------------------------------------------
📌 To-Do 리스트 삭제 기능 구현 (deleteTodo)
✅ 1. deleteTodo() 함수 구현
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
}

✅ 2. 삭제 기능 구현 과정
🔹 기본적인 삭제 동작
li.remove(); → 클릭한 li 요소를 화면에서 삭제
toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
filter()를 사용해 li.id와 일치하지 않는 요소만 남긴 새로운 배열을 생성
toDos 배열에서 해당 ID를 가진 항목을 삭제
saveToDos(); → 로컬 스토리지에 변경된 배열을 다시 저장

✅ 3. deleteTodo() 함수에서 parseInt()가 필요한 이유
function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== li.id);
}
❌ 문제 발생:
todo.id는 숫자(Number)
li.id는 문자열(String)
타입이 다르므로 비교가 제대로 이루어지지 않아 삭제되지 않음
✅ 해결 방법: parseInt() 사용
toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
parseInt(li.id)를 사용해 li.id를 숫자로 변환
이제 todo.id와 타입이 일치하므로 정상적으로 삭제 가능

✅ 4. 삭제 후 saveToDos()가 필요한 이유
🔹 삭제 후 로컬 스토리지 업데이트 과정
toDos 배열에서 삭제된 항목을 제외한 새로운 배열을 저장해야 함
saveToDos();를 호출해 변경된 데이터를 다시 localStorage에 저장
그렇지 않으면 페이지를 새로고침하면 삭제된 데이터가 다시 나타나는 문제 발생

🎯 정리
✅ deleteTodo()는 클릭된 요소를 화면에서 삭제하고, toDos 배열에서도 제거
✅ parseInt()를 사용해 li.id를 숫자로 변환해야 비교가 정상적으로 수행됨
✅ 삭제 후 saveToDos();를 호출해 변경 사항을 localStorage에 반영해야 함
*/
