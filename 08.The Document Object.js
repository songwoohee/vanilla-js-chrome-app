// 📌 Document Object (문서 객체)

// 📝 document.title로 웹 페이지 제목을 변경할 수 있음
document.title = "새로운 제목"; // 웹 페이지 제목을 "새로운 제목"으로 변경

// 📌 HTML 요소 선택하기

// 🔹 ID로 요소 선택 (getElementById): getElementById를 사용해서 id 속성으로 요소를 선택
const title = document.getElementById("title");
console.log(title); // 선택된 요소 출력
title.innerText = "변경된 제목"; // 텍스트 변경

// 🔹 class로 요소 선택 (getElementsByClassName): getElementsByClassName은 동일한 클래스 이름을 가진 모든 요소를 선택
const items = document.getElementsByClassName("item");
console.log(items); // 선택된 요소들 출력
items[0].innerText = "첫 번째 아이템 변경!"; // 첫 번째 아이템 텍스트 변경

// 🔹 태그로 요소 선택 (getElementsByTagName): getElementsByTagName을 사용하여 특정 태그명을 가진 모든 요소를 선택
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs); // 선택된 <p> 태그들 출력

// 🔹 CSS 선택자로 요소 선택 (querySelector, querySelectorAll): querySelector는 첫 번째 매칭되는 요소만 선택
const firstItem = document.querySelector(".item");
console.log(firstItem); // 첫 번째 .item 선택된 요소 출력

// querySelectorAll은 매칭되는 모든 요소를 선택하여 NodeList로 반환
const allItems = document.querySelectorAll(".item");
console.log(allItems); // 모든 .item 선택된 요소 출력

// 📌 요소 내용 및 속성 변경하기

// 🔹 요소 내용 변경
const titleElement = document.querySelector("#title");
titleElement.innerText = "Hello, JavaScript!"; // 텍스트 변경
titleElement.innerHTML = "<strong>굵게 변경!</strong>"; // HTML 변경

// 🔹 요소 속성 변경
const link = document.querySelector("a");
link.href = "https://google.com"; // 링크 주소 변경
link.target = "_blank"; // 새 창에서 열기

// 📌 요소 스타일 변경하기

// 🔹 스타일 변경
const styleElement = document.querySelector("#title");
styleElement.style.color = "red"; // 텍스트 색상 변경
styleElement.style.fontSize = "24px"; // 폰트 크기 변경
styleElement.style.backgroundColor = "yellow"; // 배경색 변경

// 📌 새로운 요소 추가 및 삭제하기

// 🔹 새로운 요소 추가 (createElement, appendChild)
const newDiv = document.createElement("div"); // 새로운 <div> 요소 생성
newDiv.innerText = "새로운 요소 추가됨!"; // 내용 추가
document.body.appendChild(newDiv); // body에 새로운 div 추가

// 🔹 기존 요소 삭제 (removeChild)
const itemToDelete = document.querySelector(".item"); // 삭제할 요소 선택
document.body.removeChild(itemToDelete); // body에서 해당 요소 삭제

// 📌 이벤트 추가하기

// 🔹 addEventListener로 클릭 이벤트 추가
const button = document.querySelector("button");

button.addEventListener("click", function () {
  alert("버튼이 클릭되었습니다!"); // 버튼 클릭 시 alert 창 띄우기
});
