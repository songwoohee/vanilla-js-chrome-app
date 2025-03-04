/*
조건
1. 0에서 사용자가 지정한 숫자까지의 범위에서 랜덤 한 숫자를 찾으세요. (범위는 0 이상 입력값 이하가 됩니다.)
2. 범위에는 음수가 포함될 수 없습니다.
3. 실시간으로 범위 값을 업데이트해야 합니다.
4. 유저가 숫자를 선택한 후에 게임을 플레이할 수 있습니다.
5. 유저에게 게임의 승패를 알려야 합니다.

hint!
1. 랜덤 숫자는 Math.random() 함수를 사용
2. <form> : 사용자로부터 입력을 받을 수 있는 입력 폼(form)을 정의할 때 사용하는 태그입니다. 입력된 정보를 제출할 수 있습니다.
3. querySelector : CSS 선택자 형식을 사용해 HTML의 요소를 JS에서 사용하도록 가져올 수 있습니다. 다만, 같은 클래스명을 가지고 있다면 가장 첫 번째 요소만을 가지고 옵니다.
4. preventDefault() : 이벤트마다 가지고 있는 브라우저에서 발생하는 고유 동작을 막기 위해 사용할 수 있습니다.
5. Math.ceil() : 주어진 숫자를 올림 하기 위해 사용하는 함수입니다. 숫자는 정수 형태로 반환됩니다.
6. parseInt() : 주어진 문자열을 정수형으로 변환해서 반환하는 함수입니다.
7. innerHTML : 요소 내에 포함된 HTML을 나타내는 프로퍼티입니다. HTML을 읽어들이거나 설정할 수 있습니다.
*/

/* ---------- 제출 내용 ---------- */
const inputNum = document.querySelector("#inputNumber");
const guessNum = document.querySelector("#guessNumber");
const palyBtn = document.querySelector("#playBtn");
const rsDisplay = document.createElement("p");
document.body.appendChild(rsDisplay);

function handleBtClick(e) {
  e.preventDefault();

  const userMax = parseInt(inputNum.value);
  const userGuess = parseInt(guessNum.value);

  if (userMax <= 0 || userGuess <= 0 || isNaN(userMax) || isNaN(userGuess)) {
    rsDisplay.innerText = "Please enter a number greater than 0 !";
    return;
  }

  const randomNum = Math.ceil(Math.random() * userMax);

  localStorage.setItem("userGuess", userGuess);
  const savedNum = localStorage.getItem("userGuess");

  let rsMessage = `You chose: ${savedNum}, the machine chose: ${randomNum}`;

  if (userGuess > randomNum) {
    rsMessage += "<br><strong>You Won!</strong>";
  } else {
    rsMessage += "<br><strong>You lost!</strong>";
  }

  rsDisplay.innerHTML = rsMessage;
}

palyBtn.addEventListener("click", handleBtClick);

/* html 코드 */
/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="styleSheet" href="style.css" />
  </head>
  <body>
    <form id="game-form">
      <h1>Random Number Game</h1>
      <h3>
        Generate a number between 0 and
        <input id="inputNumber" type="number" min="0" />
      </h2>
      <div class="guessNumBox">
        <h4>
          Guess the number:
          <input id="guessNumber" type="numver" min="0"/>
        </h4>
        <button id="playBtn">play!</button>
      </div >
    </form>
    <script type="module" src="/main.js"></script>
  </body>
</html>
*/

/* css 코드 */
/*
.guessNumBox {
  display: flex;
  align-items: center;
  gap: 3px;
}

#playBtn {
  cursor: pointer;
}
*/
