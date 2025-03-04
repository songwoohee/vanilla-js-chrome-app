/*함수(Function)란?
- 특정 작업(로직)을 수행하는 코드 블록
- 재사용 가능하여 코드 중복을 줄이고 유지보수성을 높임
- 입력값(매개변수, `parameter`)을 받아 처리하고, 필요하면 결과값을 반환(`return`)
*/
/* 기본적인 함수 정의 & 호출 */
function sayHello(name, age) {
  console.log("Hello my name is " + name + " and I'm " + age + " years old");
}

sayHello("been", 20);
sayHello("sung", 21);
sayHello("yu", 22);

/*
📌 특징 분석
- sayHello()라는 함수 정의
- 매개변수(`name`, `age`)를 받아서 동적으로 값을 변경 가능
- console.log()를 통해 문자열을 출력
- 호출(call) 시, 인자를 전달하여 여러 번 실행 가능
*/

/* 여러 개의 매개변수를 받아 연산하는 함수 */
function plus(a, b) {
  console.log(a + b);
}

function divide(a, b) {
  console.log(a / b);
}

plus(20, 30); // 50
divide(90, 30); // 3
/*
📌 특징 분석
- plus()와 divide()는 두 개의 숫자를 입력받아 연산
- 함수 호출 시, 전달된 값 `argument`을 받아 연산 후 `console.log()`로 결과 출력
- 반환값 `return`은 없음 → 결과를 저장하거나 활용하려면 `return` 필요 
*/

/* 객체(Object) 내부의 함수 (메서드) */
const player = {
  name: "hee",
  sayHello: function (name) {
    console.log("hello " + name + ", nice to meet you");
  },
};

console.log(player.name); // "hee"
player.sayHello("hee"); // "hello hee, nice to meet you"

/*
📌 특징 분석
- player 객체 내부에 sayHello 라는 메서드(method, 객체의 함수) 존재
- player.sayHello("hee")를 호출하면 console.log() 실행
- 객체 내부에서 함수는 메서드라고 부름 */

/*
함수의 주요 특징 정리
✅ 함수는 코드 재사용을 가능하게 한다.
✅ 입력값(매개변수)과 출력값(반환값)이 있을 수도 있고, 없을 수도 있다.
✅ 객체 내부에서 함수가 존재하면 메서드라고 부른다.
✅ 매개변수를 활용하면 다양한 입력값을 처리할 수 있다.
✅ 반환값`return`이 없으면 `console.log()`처럼 화면에 출력만 하고 끝난다.
*/

/* 📌 추가적으로, 반환값이 있는 함수 예제 */
function multiply(x, y) {
  return x * y;
}

const result = multiply(10, 5);
console.log(result); // 50
/* return이 있는 함수는 결과값을 저장하거나, 다른 함수에서 활용할 수 있음! */

/* 0 - 8까지 복습
✅ 함수 만들어보기 - 계산기 */

const caculator = {
  plus: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  multiply: function (a, b) {
    alert(a * b);
  },
};

caculator.plus(10, 20);
caculator.minus(10, 20);
caculator.divide(10, 20);
caculator.multiply(10, 20);
