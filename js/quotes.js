/*
Math.round(x): x를 반올림하여 가장 가까운 정수를 반환한다. 예를 들어, Math.round(4.7)의 결과는 5이다.
Math.ceil(x): x를 올림하여 가장 가까운 정수를 반환한다. 예를 들어, Math.ceil(4.1)의 결과는 5이다.
Math.floor(x): x를 내림하여 가장 가까운 정수를 반환한다. 예를 들어, Math.floor(4.9)의 결과는 4이다.
Math.random(): 0 이상 1 미만의 랜덤한 숫자를 반환한다. 예를 들어, Math.random()을 실행하면 0.12345...와 같은 숫자가 나올 수 있다.
Math.max(a, b, c, ...): 주어진 숫자 중 가장 큰 값을 반환한다. 예를 들어, Math.max(10, 5, 8)의 결과는 10이다.
Math.min(a, b, c, ...): 주어진 숫자 중 가장 작은 값을 반환한다. 예를 들어, Math.min(10, 5, 8)의 결과는 5이다.
Math.abs(x): x의 절대값을 반환한다. 예를 들어, Math.abs(-7)의 결과는 7이다.
Math.sqrt(x): x의 제곱근을 반환한다. 예를 들어, Math.sqrt(9)의 결과는 3이다.
*/

const quotes = [
  {
    quote:
      "The only way to do great work is to love what you do. (위대한 일을 하는 유일한 방법은 당신이 하는 일을 사랑하는 것이다.)",
    author: "Steve Jobs",
  },
  {
    quote:
      "It always seems impossible until it's done. (모든 것은 이루어질 때까지는 불가능해 보인다.)",
    author: "Nelson Mandela",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts. (성공이 끝이 아니고, 실패가 치명적인 것도 아니다. 중요한 것은 계속할 용기다.)",
    author: "Winston Churchill",
  },
  {
    quote:
      "Do what you can, with what you have, where you are. (할 수 있는 일을, 가진 것으로, 있는 곳에서 하라.)",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "Happiness depends upon ourselves. (행복은 우리 자신에게 달려 있다.)",
    author: "Aristotle",
  },
  {
    quote:
      "Life is really simple, but we insist on making it complicated. (삶은 정말 단순하다. 하지만 우리는 그것을 복잡하게 만들려고 한다.)",
    author: "Confucius",
  },
  {
    quote:
      "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. (과거에 머물지 말고, 미래를 꿈꾸지 말라. 현재 순간에 집중하라.)",
    author: "Buddha",
  },
  {
    quote:
      "You must be the change you wish to see in the world. (당신이 세상에서 보고 싶은 변화 자체가 되어야 한다.)",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "The best way to predict the future is to create it. (미래를 예측하는 가장 좋은 방법은 그것을 만드는 것이다.)",
    author: "Peter Drucker",
  },
  {
    quote:
      "Don't watch the clock; do what it does. Keep going. (시계를 보지 말고, 시계가 하는 일을 하라. 계속 나아가라.)",
    author: "Sam Levenson",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuotes = quotes[Math.round(Math.random() * quotes.length)];

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;
