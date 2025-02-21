/* 1. 배열 선언
- 배열은 하나의 변수 안에 여러 데이터를 저장할 수 있는 자료형
- 예시: 요일을 나타내는 배열, daysOfWeek 배열에는 6개의 문자열이 저장 */
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

/* 2. 배열에서 요소 가져오기
- 배열에서 특정 인덱스의 요소를 가져올 때 사용
- 배열의 인덱스는 0부터 시작
- daysOfWeek[5]는 6번째 요소인 "sat"를 가져옴 */
console.log(daysOfWeek[5]); // "sat"

/* 3. 배열에 요소 추가하기
- push() 메서드를 사용하여 배열의 끝에 요소를 추가
- "sun"이 배열의 마지막에 추가 */
daysOfWeek.push("sun");
console.log(daysOfWeek); // ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]

/* 4. 배열에서 요소 제거하기
- pop() 메서드를 사용하여 배열의 끝에서 요소를 제거할 수 있습니다.
- "sun"이 제거되고, 배열이 원래 상태로 돌아감 */
daysOfWeek.pop();
console.log(daysOfWeek); // ["mon", "tue", "wed", "thu", "fri", "sat"]

/* 정리
- 배열은 하나의 변수에 여러 데이터를 묶어 저장할 수 있는 자료형
- 배열에서 요소를 가져오거나 추가, 제거할 수 있으며, 이때 사용하는 메서드로는 push(), pop() 등이 있다 */
