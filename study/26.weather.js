/*
📌 JavaScript에서 사용자 위치 가져오기 (navigator.geolocation)
✅ 1. 사용자 위치 가져오기 (getCurrentPosition())
function onGeoOk(position) {
  const lat = position.coords.latitude;  // 위도
  const lng = position.coords.longitude; // 경도
  console.log("You live in", lat, lng);
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}
// 사용자 위치 요청
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
✅ 2. getCurrentPosition() 메서드
🔹 사용법
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
navigator.geolocation.getCurrentPosition() → 사용자의 현재 위치를 가져옴
매개변수로 2개의 함수가 필요
1️⃣ successCallback → 위치 정보를 가져오는 데 성공했을 때 실행
2️⃣ errorCallback → 위치 정보를 가져오는 데 실패했을 때 실행
✅ 3. 성공 시 (onGeoOk 함수)
function onGeoOk(position) {
  const lat = position.coords.latitude;  // 위도 (Latitude)
  const lng = position.coords.longitude; // 경도 (Longitude)
  console.log("You live in", lat, lng);
}
position.coords.latitude → 위도 값
position.coords.longitude → 경도 값
사용자 위치를 가져와 console.log()로 출력
✅ 4. 실패 시 (onGeoError 함수)
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
위치 정보를 가져오는 데 실패했을 때 실행
알림(alert)을 띄워 사용자에게 오류 메시지 전달

🎯 정리
✅ navigator.geolocation.getCurrentPosition()을 사용하면 사용자의 위치 정보(위도, 경도)를 가져올 수 있음
✅ 첫 번째 매개변수 (onGeoOk)는 위치를 성공적으로 가져왔을 때 실행되는 함수
✅ 두 번째 매개변수 (onGeoError)는 위치를 가져오지 못했을 때 실행되는 함수
✅ 이를 활용하면 사용자의 위치 기반 서비스(날씨, 지도 등)를 구현 가능 🚀
*/

const API_KEY = "YOUR_API_KEY"; // OpenWeather API 키

function onGeoOk(position) {
  const lat = position.coords.latitude; // 위도 가져오기
  const lon = position.coords.longitude; // 경도 가져오기
  console.log("You live in", lat, lon);

  // API 요청 URL 생성 (units=metric: 온도를 섭씨로 표시)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url); // 요청 URL 확인

  // OpenWeather API 요청 (비동기 처리)
  fetch(url)
    .then((response) => response.json()) // 응답 데이터를 JSON으로 변환
    .then((data) => {
      // HTML 요소 선택
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      // 가져온 데이터 화면에 표시
      city.innerText = data.name; // 현재 위치 도시 이름
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`; // 날씨 상태 및 온도
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you."); // 위치 정보를 가져올 수 없을 때 오류 처리
}

// 현재 위치 가져오기
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

/*
✅ 동작 원리
1️⃣ 현재 위치 가져오기
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
사용자의 현재 위치(위도, 경도)를 가져옵니다.
성공하면 onGeoOk() 실행, 실패하면 onGeoError() 실행.
2️⃣ API 요청 URL 생성
https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric
lat, lon을 이용해 API 요청을 보냄.
units=metric을 추가하여 온도를 섭씨로 변환.
3️⃣ fetch()를 이용한 API 데이터 요청
fetch(url).then((response) => response.json())
fetch()는 네트워크 요청을 보내고 응답을 받음.
response.json()을 사용해 JSON 형식으로 변환.
4️⃣ 날씨 정보 화면에 표시
data.weather[0].main → 현재 날씨 상태 (예: Clear, Clouds, Rain)
data.main.temp → 현재 온도

✅ fetch()와 then() 설명
fetch()는 비동기 네트워크 요청을 보낼 때 사용.
then()은 fetch() 요청이 완료된 후 실행할 작업을 지정.
fetch(url).then((response) => response.json())
첫 번째 then(): 응답을 JSON 형식으로 변환
두 번째 then(): 변환된 데이터를 이용하여 화면 업데이트
⚠️ fetch()는 Promise를 반환
👉 당장 실행되지 않고, 네트워크 요청이 완료될 때까지 기다린 후 실행됨.

✅ 정리
✔ OpenWeather API에 요청을 보내 날씨 정보 받아오기
✔ fetch().then()을 이용해 네트워크 요청 처리 후 데이터를 화면에 표시
✔ 비동기 작업(Promise) 처리 방식 이해 (fetch() → then() → JSON 변환 → UI 업데이트)
*/
