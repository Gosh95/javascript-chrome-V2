const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const username = document.querySelector(".username");

const USERNAME_KEY = "username";
const CLASSNAME_HIDDEN = "hidden";

function handleLoginSubmit(event) {
    event.preventDefault();

    loginForm.classList.add(CLASSNAME_HIDDEN);

    const name = loginInput.value;
    localStorage.setItem(USERNAME_KEY, name);

    showName(name);

    loginInput = "";
}

function showForm() {
    loginForm.classList.remove(CLASSNAME_HIDDEN);
    loginForm.addEventListener("submit", handleLoginSubmit);
}

function showName(name) {
    username.innerText = `Hello ${name}`;
    username.classList.remove(CLASSNAME_HIDDEN);
}

const savedName = localStorage.getItem(USERNAME_KEY);

if(savedName === null) {
    //showForm
    showForm();
} else {
    //showName
    showName(savedName);
}