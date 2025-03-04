/* 📌 Events(이벤트 처리)
1. JavaScript에서 HTML 요소에 이벤트 리스너를 추가하여 사용자가 상호작용할 수 있게 만든다.
2. `addEventListener` 함수는 HTML 요소에 이벤트를 "수신"하게 하고, 지정한 함수로 해당 이벤트를 처리한다.
3. 예시에서는 클릭 이벤트가 발생하면 제목의 색상이 파란색으로 변경된다.
*/

// 🔹 첫 번째 자식 div.hello 안의 첫 번째 h1 요소 선택
const title = document.querySelector("div.hello:first-child h1");

// 🔹 클릭 시, 제목 색상을 파란색으로 변경하는 함수
function handleTitleClick() {
  title.style.color = "blue";
}

// 🔹 클릭 이벤트 리스너 추가
title.addEventListener("click", handleTitleClick);

/* 📌 Events Part Two
1. `console.dir`을 사용하면 HTML 요소의 디렉터리 구조를 출력할 수 있다.
2. `on`이 붙은 이벤트들은 이벤트 리스너로 사용할 수 있는 이벤트들이다.
3. `mouseenter`와 `mouseleave`는 마우스 이벤트로, 각각 마우스가 요소 위에 올라갔을 때와 요소를 떠날 때 발생한다.
*/

// 📌 Mouse Event Handling (마우스 이벤트 처리)
// 🔹 title 요소 선택
const title2 = document.querySelector("div.hello:first-child h1");

// 🔹 마우스가 title 위로 올라갔을 때 텍스트 변경
function handleMouseEnter() {
  title2.innerText = "mouse is here!";
}

// 🔹 마우스가 title에서 벗어났을 때 텍스트 변경
function handleMouseLeave() {
  title2.innerText = "mouse is gone!";
}

// 🔹 마우스가 title 위로 올라가면 handleMouseEnter 함수 실행
title2.addEventListener("mouseenter", handleMouseEnter);

// 🔹 마우스가 title에서 벗어나면 handleMouseLeave 함수 실행
title2.addEventListener("mouseleave", handleMouseLeave);

/* 📌 Window Events
1. `window` 객체는 브라우저 창에서 발생하는 이벤트를 감지할 수 있다.
2. 대표적인 `window` 이벤트로는 `resize`, `copy`, `offline`, `online` 등이 있다.
3. 예시에서는 창 크기 변경 시 배경색이 tomato로 바뀌고, 복사, 네트워크 상태 변경 등의 이벤트를 감지한다.
*/

// 🔹 창 크기 변경 시 배경색 변경
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

// 🔹 사용자가 복사(Ctrl+C)할 때 알림
function handleWindowCopy() {
  alert("copier!");
}

// 🔹 네트워크 연결이 끊겼을 때 알림
function handleWindowOffline() {
  alert("SOS No Wifi!");
}

// 🔹 네트워크가 복구되었을 때 알림
function handleWindowOnline() {
  alert("Wifi Good!");
}

// 🔹 window 이벤트 리스너 추가
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
