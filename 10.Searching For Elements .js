// 📌 HTML 요소 선택하기

// 🔹 클래스 이름으로 선택 (getElementsByClassName): "hello"라는 클래스를 가진 모든 HTML 요소를 가져옴
const hellos = document.getElementsByClassName("hello");
console.log(hellos);

// 🔹 태그 이름으로 선택 (getElementsByTagName): 모든 "h1" 태그를 가져옴
const title = document.getElementsByTagName("h1");
console.log(title);

// 🔹 CSS 선택자를 사용하여 단일 요소 선택 (querySelector): ".hello" 클래스를 가진 첫 번째 요소를 선택
const firstHello = document.querySelector(".hello");
console.log(firstHello);

// 🔹 CSS 선택자를 사용하여 요소 선택 (querySelectorAll): ".hello h1" 선택자를 통해, "hello" 클래스를 가진 요소 안의 모든 "h1" 태그를 가져옴
const getTitle = document.querySelectorAll(".hello h1");
console.log(getTitle);

/* 📌 querySelector에 대해서 자세히 알아보자
1. `querySelector`: CSS 선택자를 사용해서 HTML 요소를 선택한다.
2. 하나의 element만을 return 한다.
3. 만약 같은 이름의 클래스나 태그가 있다면 첫 번째 요소만 적용된다.
4. 여러 요소를 선택하고 싶다면 `querySelectorAll`을 사용해야 한다.
*/

/* 📌 getElements 계열 함수와 차이점
1. `getElementsById`, `getElementsByClassName` 등의 함수는 항상 HTMLCollection 형태로 반환된다.
    이는 "배열처럼 보이지만, 실제 배열은 아니며" 동적으로 변하는 특징이 있다.
2. `querySelectorAll`은 NodeList 형태로 반환되며, 일반적으로 배열처럼 다룰 수 있다.
*/
