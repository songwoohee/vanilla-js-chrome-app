/*
# Form Submission (폼 제출)
폼 제출은 사용자가 입력한 데이터를 서버로 제출하거나 브라우저에서 데이터를 처리하는 과정입니다. 기본적으로 폼은 submit될 때 페이지를 새로 고침하는 동작을 합니다.

## 기본 폼 동작
HTML 코드에서 `input` 요소를 포함한 `form`을 사용하면 사용자가 입력을 완료하고 엔터 키를 누르거나 submit 버튼을 클릭하면 폼이 제출됩니다. 이때 페이지가 새로 고침됩니다.
*/
/* html 코드 */
<form id="login-form">
  <input required maxlength="15" type="text" placeholder="what is your name?" />
  <button>login</button>
</form>;

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleBtClick() {
  const userName = loginInput.value;
  console.log(userName);
}
loginButton.addEventListener("click", handleBtClick);
