/*
Conditionals (조건문)
isNaN` 함수란?
- isNaN(value)는 값이 NaN인지 확인하는 함수이다.
- 숫자가 아니면 true, 숫자이면 false를 반환한다.
 */
// 사용자에게 나이를 입력받아 정수로 변환
const age = prompt("How old are you?");
console.log(typeof age, typeof parseInt(age)); // 입력된 값의 타입 확인

const parsedAge = parseInt(age);
console.log(age, parsedAge); // 원본 값과 변환된 값 확인

// 입력값이 숫자인지 확인
console.log(isNaN(parsedAge)); // 숫자가 아니면 true

/* 조건문 (if) */
if (isNaN(parsedAge)) {
  console.log("Please write a number");
} else {
  console.log("Thank you for writing your age.");
}

/* else if 문 */
if (isNaN(parsedAge)) {
  console.log("Please write a number");
} else if (parsedAge < 18) {
  console.log("You are too young");
} else {
  console.log("You can drink");
}

/* else if 문 확장 (AND / OR 연산자 추가) */
if (isNaN(parsedAge) || parsedAge < 0) {
  console.log("Please write a positive number");
} else if (parsedAge < 18) {
  console.log("You are too young");
} else if (parsedAge >= 18 && parsedAge <= 50) {
  console.log("You can drink");
} else if (parsedAge > 50 && parsedAge <= 80) {
  console.log("You should exercise");
} else {
  console.log("You should be whatever you want");
}
/*
조건문	                            | 설명
isNaN(parsedAge)	                사용자가 숫자가 아닌 값을 입력하면 "Please write a number" 출력
parsedAge < 18	                    18세 미만이면 "You are too young" 출력
parsedAge >= 18 && parsedAge <= 50	18~50세면 "You can drink" 출력
parsedAge > 50 && parsedAge <= 80	50~80세면 "You should exercise" 출력
else	                            80세 초과면 "You should be whatever you want" 출력
 */

/*
✅ 정리 포인트
1. typeof age를 활용해 입력값의 타입을 확인
2. isNaN(value): 숫자가 아니면 true를 반환
3. if-else 문을 활용하여 다양한 조건을 설정 가능
4. && (AND) 연산자, || (OR) 연산자를 사용하여 조건을 확장 가능
*/
