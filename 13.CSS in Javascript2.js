/*
📌 CSS in JavaScript Part Two
   - JavaScript에서 className을 활용하여 CSS 스타일을 동적으로 변경
   - 클릭 시 'clicked' 클래스를 추가/제거하여 색상을 변경하는 기능 구현

   목표: 클릭 시 텍스트 색상과 글꼴을 바꾸는 클래스 토글 예제
*/
// h1 요소 선택
const h1 = document.querySelector("div.hello:first-child h1");

// 클릭 시 실행될 함수 정의
function handleTitleClick() {
  // 클릭 시 적용할 클래스 목록
  const clickedClass = "clicked sexy-font";

  // 현재 클래스명이 clickedClass와 동일한지 확인
  if (h1.className === clickedClass) {
    // 동일하다면 클래스 제거
    h1.className = "";
  } else {
    // 동일하지 않다면 clickedClass를 추가
    h1.className = clickedClass;
  }
}

// 클릭 이벤트 리스너 추가
h1.addEventListener("click", handleTitleClick);

// 동일한 동작을 h1.onclick을 통해 처리할 수도 있음
// h1.onclick = handleTitleClick;
