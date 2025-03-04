/* 변수 선언 */
const a = 10;
const b = 2;

console.log(a + b);
console.log(a * b);
console.log(a / b);

/* const 상수 선언
- 한 번 값을 할당하면, 변경할 수 없음.
- 값이 변경되지 않는 변수를 선언할 때 사용.
 */

const c = 10;
const d = 2;

console.log(c + d); // 12
console.log(c * d); // 20
console.log(c / d); // 5

/* let 선언
- 값을 변경할 수 있는 변수를 선언할 때 사용.
- 값을 재할당 할 수 있으며, 다시 할당할 때 `let`을 다시 붙이지 않음에 유의.*/

let name = "hee";

console.log("my name is " + name); // "my name is hee"

name = "woohee"; // 변수 값 업데이트
console.log("my name is " + name); // "my name is woohee"

/* var - 변수 선언 (사용 권장 X)

- let과 const와 달리, var는 블록 레벨 스코프가 아닌 함수 레벨 스코프를 가짐.
- 이로 인해 예상치 못한 결과를 초래할 수 있어 var는 가급적 사용하지 않는 것이 좋다.
- 변수 호이스팅(Hoisting)도 다르게 작동하는 점이 문제를 일으킬 수 있다. */

var color = "blue";
if (true) {
  var color = "red"; // 같은 이름의 변수를 덮어쓰기
}
console.log(color); // "red" (예상과 다를 수 있음)

/*
정리

- const: 값을 변경할 수 없는 상수 선언
- let: 값을 변경할 수 있는 변수 선언
- var: 오래된 방식으로 사용을 피해야 할 변수 선언. 블록 스코프가 아닌 함수 스코프를 가지며 예기치 않은 동작을 할 수 있음.

# 왜 `var`를 사용하지 말라고 할까?

- var는 호이스팅과 스코프의 처리 방식에서 문제가 발생할 수 있어, 예상하지 못한 오류를 일으킬 수 있기 때문이다.
- let과 const는 블록 레벨 스코프를 가지므로 코드의 흐름을 예측하기 쉬워진다. var는 함수 레벨 스코프를 가지기 때문에, 같은 이름의 변수가 의도치 않게 덮어쓰여서 문제가 생길 수 있다.
 */
