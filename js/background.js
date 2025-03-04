/*
js -> html에 요소를 추가
createElement
appendChild
html 요소를 javascript로 추가
document.createElement("태그명"): 새로운 HTML 요소 생성
요소.appendChild(추가할 요소): 특정 요소에 자식 요소로 추가
요소.innerText = "텍스트": 요소 내부의 텍스트 변경
*/
const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const choseImage = images[Math.round(Math.random() * images.length)];
console.log(choseImage);

const bgImage = document.createElement("img");
bgImage.src = `img/${choseImage}`;
document.body.appendChild(bgImage);
