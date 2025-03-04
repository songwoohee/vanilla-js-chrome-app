/* html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Vanilla JS</title>
  </head>
  <body>
    <form id="login-form" class="hidden">
      <input
        required
        maxlength="15"
        type="text"
        placeholder="what is your name?"
      />
      <button>login</button>
    </form>
    <h1 id="greeting" class="hidden"></h1>
    <script src="app.js"></script>
  </body>
</html>
*/

/* js */
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
/*
✅ localStorage.getItem(USER_NAME_KEY) 를 사용하여 저장된 userName을 가져옴
✅ 만약 저장된 값이 없다면 null 반환
 */

function paintGreetings(savedUserName) {
  greeting.innerText = `Hello ${savedUserName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
/*
✅ savedUserName 값을 받아와서 Hello ${savedUserName} 문구를 화면에 표시
✅ hidden 클래스를 제거하여 환영 메시지를 보이게 함
 */

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginSubmit);
} else {
  paintGreetings(savedUserName);
}

/*
🚀 localStorage에서 userName을 불러오는 과정 (loading userName)
1️⃣ 📌 const USER_NAME_KEY = "userName"; 변수명을 대문자로 짓는 이유
✅ 대문자 변수 (상수) 는 한 번 정해지면 변경되지 않는 값을 의미함
✅ 일반적으로 상수(Constant) 값은 대문자로 표기하는 것이 코딩 컨벤션
✅ USER_NAME_KEY는 변하지 않는 고정된 문자열 값이므로 대문자로 정의

💡 이렇게 변수명을 지으면 좋은 점
✔ 가독성이 좋아짐 → "이 변수는 바뀌지 않는 값이다!" 한눈에 알 수 있음
✔ 유지보수가 편해짐 → "userName" 문자열이 여러 군데 사용될 때, 한 곳만 수정하면 됨"
✔ 실수 방지 → USER_NAME_KEY = "newValue"; ❌ (재할당 불가)

🎯 코드 해석
1️⃣ 변하지 않는 값(상수) → USER_NAME_KEY와 같이 대문자로 정의하면 가독성 + 유지보수 용이
2️⃣ if (savedUserName === null)
저장된 이름이 없으면 로그인 폼을 보여줌
사용자가 입력 후 제출하면 이름을 저장하고 환영 메시지 표시
3️⃣ else
저장된 이름이 있으면 바로 환영 메시지를 표시
*/
