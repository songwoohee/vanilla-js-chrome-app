// 📌 HTML 요소 선택하기

// 🔹 ID로 요소 선택 (getElementById)
// "title"이라는 id를 가진 HTML 요소를 가져옴
const title = document.getElementById("title");

// 🔹 요소 출력하기
console.log(title); // title 요소 정보 출력
console.dir(title); // title 요소의 디렉터리 구조를 출력 (속성 등 상세 정보)

// 🔹 요소의 텍스트 변경하기
title.innerText = "Got you!"; // title 요소의 텍스트를 "Got you!"로 변경

// 🔹 요소의 id와 class 속성 출력하기
console.log(title.id); // title 요소의 id 값 출력
console.log(title.className); // title 요소의 class 값 출력

// 📌 HTML과 JavaScript 상호작용
/*
1. JavaScript는 `document` 객체를 통해 HTML과 상호작용 가능
2. 이 객체를 사용하면 브라우저에서 직접 HTML 요소를 읽고 수정 가능
3. 핵심은 HTML에서 항목을 선택하고, 이를 JavaScript를 통해 동적으로 변경하는 것
-> 이러한 동작을 잘 이해하는 것이 중요!
*/

// 📌 중요 포인트
/*
1. JavaScript에서 document 객체를 통해 HTML을 읽고 수정할 수 있다.
2. JavaScript는 HTML의 구조를 직접적으로 조작하는 강력한 도구다.
3. `getElementById`나 `querySelector` 등 다양한 방법으로 HTML 요소를 선택하고, 이를 변경할 수 있다.
4. `innerText`, `id`, `className` 등을 사용하여 HTML 요소의 내용 및 속성을 제어할 수 있다.
*/
