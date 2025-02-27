const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");

function handleLoginSubmit(e) {
  e.preventDefault();
  const userName = loginInput.value;
  console.log(userName);
}
function handleLinkClick(e) {
  e.preventDefault();
  console.log(e);
  alert("go go!");
}

loginForm.addEventListener("submit", handleLoginSubmit);
link.addEventListener("click", handleLinkClick);
