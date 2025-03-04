/*
1️⃣ Intervals (setInterval): ⏳ 일정 시간마다 반복 실행되는 함수
- `setInterval(함수, 시간(ms))`
- 특정 시간 간격마다 지정된 함수를 실행
2️⃣ Timeout (setTimeout): ⏳ 일정 시간이 지난 후 한 번만 실행되는 함수
- `setTimeout(함수, 시간(ms))`
- 특정 시간이 지난 후 한 번만 실행됨
3️⃣ padStart(): 📌 문자열의 길이를 일정하게 맞춰줌
- `문자열.padStart(길이, "채울 문자")`
- 지정된 길이보다 짧으면 앞쪽을 특정 문자로 채움
*/
const clock = document.querySelector("#clock");

function sayHello() {
  console.log("Hello!");
}

// setInterval(sayHello, 5000);
setTimeout(sayHello, 3000);

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(getClock, 1000);
