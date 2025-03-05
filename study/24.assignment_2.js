/* 
[문제]
Date와setInterval함수들을 사용해 크리스마스까지 며칠이 남았는지 알려주는 시계를 만드세요. (12월 25일)
[hint]
1.Date 생성자 [new Date()] : 시간을 나타내는 Date 객체를 생성하는 생성자입니다. Date 객체를 사용하기 위해 먼저 선언해 주어야 합니다.
2.Date().getFullYear() : 2021처럼 4자리의 연도를 얻을 수 있는 함수입니다.
3.Math.floor : 주어진 수와 같거나 작은 수 중에서 가장 큰 정수를 반환하는 함수입니다.
4.setInterval : 인수로 전달받은 함수를 지정해 둔 일정한 간격으로 실행할 수 있게 해주는 함수입니다.
*/

const clockTitle = document.querySelector(".js-clock");

function getChClock() {
  const now = new Date();
  const chrismas = new Date(now.getFullYear(), 11, 25);
  const dDay = chrismas - now;

  const days = String(Math.floor(dDay / (1000 * 60 * 60 * 24))).padStart(
    3,
    "0"
  );
  const hours = String(Math.floor((dDay / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const minutes = String(Math.floor((dDay / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const seconds = String(Math.floor((dDay / 1000) % 60)).padStart(2, "0");

  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(getChClock, 1000);

/*
  now.getFullYear() 사용 이유:
  - 현재 날짜 객체에서 연도를 가져오기 위해 사용.
  - 크리스마스와 비교하기 위해 현재 연도를 동적으로 계산하여 사용.

  Math.floor() 사용 이유:
  - 소수점 이하를 버리고 정수 값만을 반환.
  - 날짜, 시간 계산에서 남은 시간(일, 시간, 분, 초)을 정확하게 정수로 나타내기 위해 사용.
  - 정확한 남은 일 수를 계산하려면 Math.floor()가 필수!

  1000 * 60 * 60 * 24로 계산한 이유:
  - 밀리초를 '일' 단위로 변환하기 위해 사용.
  - 1일 = 24시간, 1시간 = 60분, 1분 = 60초, 1초 = 1000밀리초로 계산하여 하루를 밀리초 단위로 환산.
*/
