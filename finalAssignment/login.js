const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const welcome = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USER_NAME = "userName";

function handleLoginSubmit(e) {
  e.preventDefault();

  console.log("Before hiding:", loginForm.classList);
  loginForm.classList.add(HIDDEN_CLASS);
  console.log("After hiding:", loginForm.classList);

  const userName = loginInput.value;
  localStorage.setItem(USER_NAME, userName);
  console.log(localStorage.getItem(USER_NAME));

  welcomeMessage(userName);
}

const savedUserName = localStorage.getItem(USER_NAME);

function welcomeMessage(savedUserName) {
  welcome.innerText = `Hi! my friend ${savedUserName} :)`;
  welcome.classList.remove(HIDDEN_CLASS);
}

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", handleLoginSubmit);
} else {
  welcomeMessage(savedUserName);
}
