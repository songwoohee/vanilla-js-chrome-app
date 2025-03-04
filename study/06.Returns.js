/*
1️⃣ return의 역할
- 함수는 단순히 동작을 수행하는 것뿐만 아니라, 결과 값을 반환할 수도 있다
- return 키워드를 사용하면, 함수의 실행 결과를 함수 호출한 곳으로 반환한다
- return이 없으면 함수 내부에서 실행된 값은 외부에서 사용할 수 없다

2️⃣ return을 활용한 예제

📌 한국 나이 계산기 예제
*/
const age = 100;

function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2; // 한국식 나이 계산 (기본 나이 +2)
}

const krAge = calculateKrAge(age);
console.log(krAge); // 102
/*
✅ calculateKrAge(age)를 실행하면,
- ageOfForeigner + 2 값이 반환(return)됨
- krAge 변수에 그 결과값이 저장됨
*/

/*
3️⃣ return을 이용한 계산기 객체
📌 계산기 객체를 만들고, 각 연산을 함수로 정의
*/
const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};
/* ✅ 각 연산 함수는 계산 결과를 return으로 반환함 */

/*
4️⃣return을 이용한 연속 계산
📌 계산 결과를 변수에 저장하여 다음 연산에 활용
*/
const plusResult = calculator.plus(10, 20);
console.log(plusResult); // 30

const minusResult = calculator.minus(plusResult, 10);
console.log(minusResult); // 20

const divideResult = calculator.divide(minusResult, 2);
console.log(divideResult); // 10

const multiplyResult = calculator.multiply(plusResult, minusResult);
console.log(multiplyResult); // 600
/*
✅ return이 없다면 결과값을 저장하지 못하고 연속적인 계산도 불가능
✅ return이 있기 때문에 이전 연산 결과를 활용할 수 있음
*/

/*
💡 정리
1. return은 함수가 실행한 결과값을 반환하는 역할
2. return이 없으면 함수는 값을 내보내지 않음 → 외부에서 사용 불가능
3. return을 활용하면, 함수 실행 결과를 다른 연산이나 변수에 활용 가능
4. 여러 개의 함수 실행 결과를 연속적으로 연결해서 사용할 수 있음
5. return하는 순간, 함수는 종료
👉 즉, return을 잘 활용하면 함수의 재사용성이 높아지고, 코드가 더 유연해진다!
*/
