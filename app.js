const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);

console.dir(title);

function handleMouseEnter() {
  title.innerText = "mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "mouse is gone!";
}

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

/* Events
dir을 통해 element를 console에 출력해준다. on이 붙은게 사용 가능한 event listener이다.
*/
