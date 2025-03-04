/*
- 키(key)와 값(value) 형태로 이루어진 자료 구조
- 값들이 서로 다른 의미를 가지며, 순서(index)보다 키(key)가 중요함
- 객체의 각 값(프로퍼티)은 고유한 키(key)로 접근
- const로 선언해도 객체 내부의 프로퍼티는 변경 가능
*/
const player = {
  name: "hee",
  points: 10,
  fat: true,
};

console.log(player); // {name: "hee", points: 10, fat: true}

// 객체의 프로퍼티 값 변경
player.fat = false;
console.log(player); // {name: "hee", points: 10, fat: false}

/*
✅객체의 특징
- 키(key) - 값(value) 형태로 데이터 저장
- 배열과 달리 값들이 서로 다른 의미를 가짐 (예: `name`, `points`, `fat`)
- 순서(index)보다 키(key)가 중요
- 점(`.`) 또는 대괄호(`[]`) 표기법으로 값에 접근 (player.name 또는 player["name"])
- const로 선언한 객체라도 내부 값은 변경 가능 (player.fat = false → 가능)
- 하지만 객체 자체를 통째로 다른 값으로 바꾸는 것은 불가능(player = false → ❌ 에러 발생)
 */
