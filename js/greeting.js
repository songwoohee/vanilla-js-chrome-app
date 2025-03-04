const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME_KEY = "userName"; // 대문자명 변수

function handleLoginSubmit(e) {
  e.preventDefault();

  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USER_NAME_KEY, userName);

  paintGreetings(userName);
}

const savedUserName = localStorage.getItem(USER_NAME_KEY);
console.log(savedUserName);

function paintGreetings(savedUserName) {
  greeting.innerText = `Hello ${savedUserName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginSubmit);
} else {
  paintGreetings(savedUserName);
}
