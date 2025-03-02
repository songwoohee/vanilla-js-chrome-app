/*
📌 localStorage를 이용한 userName 저장
1️⃣ localStorage란?
브라우저에 데이터를 저장하는 저장소
새로고침하거나 브라우저를 닫아도 데이터가 유지됨
문자열(String) 형태로만 저장 가능

2️⃣ localStorage 사용법
// 데이터 저장
localStorage.setItem("key", "value");

// 데이터 가져오기
localStorage.getItem("key");

// 데이터 삭제
localStorage.removeItem("key");

// 모든 데이터 삭제 (주의!)
localStorage.clear();

3️⃣ 사용 예제: 사용자 이름 저장
function handleLoginSubmit(e) {
  e.preventDefault();

  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;

  // 로컬스토리지에 userName 저장
  localStorage.setItem("userName", userName);

  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);

  console.log(userName);
}
✅ localStorage.setItem("userName", userName); → 사용자가 입력한 이름을 저장

4️⃣ 데이터 불러오기 (getItem)
const savedUserName = localStorage.getItem("userName");

if (savedUserName !== null) {
  greeting.innerText = `Hello ${savedUserName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
✅ localStorage.getItem("userName") → 저장된 userName 값을 가져옴
✅ null 체크 → 저장된 값이 있으면 인사 메시지 표시

5️⃣ 데이터 삭제 (removeItem)
localStorage.removeItem("userName");
✅ 특정 키(userName)에 저장된 데이터 삭제
✅ clear()를 사용하면 모든 저장된 데이터 삭제됨 (주의!)

🚀 정리
✔ setItem(key, value) → 데이터 저장
✔ getItem(key) → 데이터 가져오기
✔ removeItem(key) → 특정 데이터 삭제
✔ clear() → 모든 데이터 삭제 (주의)
*/
