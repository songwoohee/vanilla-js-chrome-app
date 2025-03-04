/*
📌 input.value 사용법
input.value는 <input> 요소에 입력된 값을 가져오거나 설정하는 데 사용된다.
 */
// 🔹 로그인 폼의 input과 button 요소 선택
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

// 🔹 버튼 클릭 시 입력값을 콘솔에 출력하는 함수
function handleBtClick() {
  console.log("입력한 값:", loginInput.value); // input에 입력된 값 출력
}

// 🔹 클릭 이벤트 리스너 추가
loginButton.addEventListener("click", handleBtClick);

/*
주요 포인트
값 읽기: 사용자가 입력한 텍스트는 input.value로 읽을 수 있다.
값 설정: input.value에 새로운 값을 할당하면 필드의 값이 변경된다.
이벤트 활용: click, input, change 등 다양한 이벤트에서 input.value를 사용할 수 있다
 */
