const age = 100;

function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);

/* 함수가 그냥 어떤 기능을 수행하는 것이라기보단, 어떤 일을 수행하고 그 결과를 알려주는 것 -> 결과를 준다.
return을 함으로써 function을 호출하여 값을 준다 */

const caculator = {
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

caculator.plus(10, 20);
caculator.minus(10, 20);
caculator.divide(10, 20);
caculator.multiply(10, 20);

const plusResult = caculator.plus(10, 20);
console.log(plusResult);
const minusResult = caculator.minus(plusResult, 10);
console.log(minusResult);
const divideResult = caculator.divide(minusResult, 2);
console.log(divideResult);
const multiplyResult = caculator.multiply(plusResult, minusResult);
console.log(multiplyResult);
