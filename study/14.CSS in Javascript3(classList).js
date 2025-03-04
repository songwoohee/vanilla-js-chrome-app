/* 📌classList 활용 예제

### **1. `classList`를 사용한 클래스 추가/제거 (첫 번째 예시)**

```javascript
// h1 요소 선택
const h1 = document.querySelector("div.hello:first-child h1");

// 클릭 시 실행될 함수 정의
function handleTitleClick() {
  const clickedClass = "clicked";

  // h1 요소가 clickedClass 클래스를 가지고 있는지 확인
  if (h1.classList.contains(clickedClass)) {
    // 있으면 클래스 제거
    h1.classList.remove(clickedClass);
  } else {
    // 없으면 클래스 추가
    h1.classList.add(clickedClass);
  }
}

// 클릭 이벤트 리스너 추가
h1.addEventListener("click", handleTitleClick);

📌 코드 설명 1 - classList.contains() / classList.add() / classList.remove()
classList는 요소의 클래스를 다루는 객체로, add, remove, contains 등의 메서드를 제공하여 클래스를 동적으로 추가하거나 제거 가능

classList.contains(className): 해당 클래스가 요소에 존재하는지 여부를 확인 (true/false 반환)
classList.add(className): 해당 클래스를 요소에 추가
classList.remove(className): 해당 클래스를 요소에서 제거
첫 번째 예시에서는 contains() 메서드를 사용해 클릭 시 clicked 클래스가 이미 존재하는지 확인하고,
존재하면 remove()로 클래스를 제거하고, 그렇지 않으면 add()로 클래스를 추가하는 방식
*/

/* 📌classList toggle 활용 예제 */
// h1 요소 선택
const h1 = document.querySelector("div.hello:first-child h1");

// 클릭 시 실행될 함수 정의
function handleTitleClick() {
  // 클릭 시, clicked 클래스를 토글 (있으면 제거, 없으면 추가)
  h1.classList.toggle("clicked");
}

// 클릭 이벤트 리스너 추가
h1.addEventListener("click", handleTitleClick);

// 동일한 동작을 h1.onclick을 통해 처리할 수도 있음
// h1.onclick = handleTitleClick;

/* 📌 코드 설명 2 - classList.toggle()
classList.toggle(className): 해당 클래스가 존재하면 제거하고, 존재하지 않으면 추가,
contains, add, remove를 한 번에 처리할 수 있어 간결한 코드 작성이 가능

두 번째 예시에서는 classList.toggle("clicked")를 사용하여 클릭 시 clicked 클래스를 토글함 */
