/*1. null

- 명시적으로 "값이 없음"을 설정하는 값
- 변수가 비어있다는 것을 의도적으로 표현할 때 사용 */
const amIFat = null;
console.log(amIFat); // null

/* 2. undefined

- 값이 할당되지 않은 변수
- 변수를 선언만 하고 값을 할당하지 않으면 자동으로 `undefined`가 된다.
- 메모리 공간이 할당되었으나 값이 없는 상태 */
let something;
console.log(something); // undefined

console.log(something, amIFat); // undefined null

/* 3.true와 false

- boolean 타입의 값으로, 논리적인 참과 거짓을 나타냄
- true와 false는 문자열이 아니라 논리적인 값 */
console.log(true); // true
console.log(false); // false

/* 정리
- null: 명시적으로 값을 비워둔 상태
- undefined: 값이 할당되지 않은 변수. 즉, 값이 없는 상태지만 메모리 공간은 할당됨.
- true와 false: boolean 타입의 값으로, 논리적 판단을 위한 참과 거짓. */
