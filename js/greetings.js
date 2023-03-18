const loginFormWrap = document.querySelector("#login-form-wrap");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const afterLogin = document.querySelector("#after-login");

const HIDDEN_CLASSNAME = "hidden";
const LOCALSTORAGE_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  loginFormWrap.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(LOCALSTORAGE_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  afterLogin.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `✨ 안녕, ${username} ✨`;
}
const savedUsername = localStorage.getItem(LOCALSTORAGE_KEY);

if (savedUsername === null) {
  loginFormWrap.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
