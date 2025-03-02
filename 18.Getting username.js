const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function handleLoginSubmit(e) {
  e.preventDefault();

  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value; // 사용자 입력값 가져오기

  // greeting.innerText = "Hello " + userName;
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);

  console.log(userName);
}

loginForm.addEventListener("submit", handleLoginSubmit);

/*
✅ 문자열 조합 (템플릿 리터럴 vs. 기존 방식)

1. 기존 방식 (문자열 연결)
greeting.innerText = "Hello " + userName;

2. 템플릿 리터럴 (백틱 사용)
greeting.innerText = `Hello ${userName}`;

✅ 템플릿 리터럴(백틱 사용)의 장점
1. 변수 삽입이 간결함 → + 없이 ${}로 표현 가능
2, 여러 줄 문자열 지원
3. ${} 안에서 계산, 함수 호출 가능

예시)
const age = 25;
console.log(`나는 ${age}살 입니다.`); // "나는 25살 입니다."
console.log(`10 + 20 = ${10 + 20}`); // "10 + 20 = 30"
*/
