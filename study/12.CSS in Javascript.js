/* 📌 CSS in JavaScript - 색상 변경 예제
1. JavaScript에서 스타일을 직접 변경하여 동적인 UI 구현 가능
2. 클릭 시 색상이 'blue' ↔ 'tomato'로 변경되도록 이벤트 핸들링
*/

const h1 = document.querySelector("div.hello:first-child h1");

/* 🔹 클릭하면 색상을 변경하는 함수 */
function handleTitleClick() {
  const currentColor = h1.style.color; // 현재 색상 가져오기
  let newColor;

  // 색상이 'blue'라면 'tomato'로 변경, 아니면 'blue'로 변경
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }

  h1.style.color = newColor; // 새로운 색상 적용
}

/* 🔹 이벤트 리스너 추가 */
h1.addEventListener("click", handleTitleClick);

// h1.onclick = handleTitleClick; // 동일한 기능 수행
