/*
`preventDefault()`는 이벤트의 기본 동작을 막는 메서드입니다. 예를 들어, `submit` 이벤트에서는 폼 제출 후 페이지 새로 고침을 방지할 수 있습니다.

### `e.preventDefault()`가 필요한 이유
- `submit` 버튼 클릭 시, 폼은 기본적으로 서버로 데이터를 전송하려고 합니다. 그러나 자바스크립트로 폼 데이터를 처리하거나, 사용자 입력을 검증한 후에 제출하려면 이 기본 동작을 막아야 합니다.
- `e`는 이벤트 객체로, 이벤트에 대한 세부 정보를 포함하고 있습니다. `e.preventDefault()`는 해당 이벤트의 기본 동작을 막아줍니다.
*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function handleLoginSubmit(e) {
  e.preventDefault(); // 기본 폼 제출 동작 방지 (페이지 새로 고침 방지)
  const userName = loginInput.value; // 입력된 값 가져오기
  console.log(userName); // 콘솔에 사용자 이름 출력
}

loginForm.addEventListener("submit", handleLoginSubmit); // 폼 제출 시 이벤트 리스너 추가

/*
### 이벤트 객체 (Event Object)
- 이벤트 객체는 이벤트가 발생했을 때 브라우저가 자동으로 생성하는 객체로, 이벤트와 관련된 모든 정보를 담고 있습니다.
- 이벤트 객체는 이벤트가 발생한 대상(ex: 클릭된 버튼, 입력된 텍스트 등)과 기타 관련 정보를 포함합니다.

### 주요 속성들
- `e.target`*: 이벤트가 발생한 요소 (이벤트가 실행된 DOM 요소)
- `e.type`*: 이벤트의 종류 (예: `click`, `submit`, `keydown` 등)
- `e.preventDefault()`: 이벤트의 기본 동작을 취소합니다.
- `e.stopPropagation()`: 이벤트가 더 이상 부모 요소로 전파되지 않게 막습니다.
 */

<a href="https://www.naver.com">go to naver!</a>;

const link = document.querySelector("a");

function handleLinkClick(e) {
  e.preventDefault();
  console.log(e);
  alert("go go!");
}

link.addEventListener("click", handleLinkClick);

/*
# 기본적인 링크 동작
- <a> 태그의 기본 동작은 클릭 시 해당 href 속성에 정의된 URL로 이동하는 것입니다.
- e.preventDefault()로 기본 링크 이동 동작을 막고, 대신 콘솔에 이벤트 객체를 출력하며, alert("go go!")로 사용자에게 알림을 보여줍니다.
 */
