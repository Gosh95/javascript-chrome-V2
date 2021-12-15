const greetingForm = document.getElementById("greeting-form");
const greetingInput = greetingForm.querySelector("input");
const username = document.querySelector(".username");
const condition = document.querySelector(".condition");
const question =  document.querySelector(".question");
const emotions = document.querySelectorAll(".emotions span");

const USERNAME_KEY = "username";
const NONE_CLASS = "none";
const CHEKCED_CLASS = "checked";
const CENTER_CLASS = "center";

function handleLoginSubmit(event) {
    event.preventDefault();

    greetingForm.classList.add(NONE_CLASS);
    greetingForm.classList.remove(CENTER_CLASS);

    const name = greetingInput.value;
    localStorage.setItem(USERNAME_KEY, name);

    showName(name);

    greetingInput.value = "";
}

function showForm() {
    greetingForm.classList.remove(NONE_CLASS);
    greetingForm.classList.add(CENTER_CLASS);
    greetingForm.addEventListener("submit", handleLoginSubmit);
}

function showName(name) {
    username.innerText = `Hello ${name}`;
    question.innerText = "How are you today?";
    username.classList.remove(NONE_CLASS);
    condition.classList.remove(NONE_CLASS);
}

function clickEmotion(event) {
    const emotion = event.target.parentElement;
    emotion.classList.toggle(CHEKCED_CLASS);

    emotions.forEach((element) => {
        if(element !== emotion) {
            element.classList.remove(CHEKCED_CLASS);
        }
    })
}

emotions.forEach((emotion) => {
    emotion.addEventListener("click", clickEmotion);
})

const savedName = localStorage.getItem(USERNAME_KEY);

if(savedName === null) {
    //showForm
    showForm();
} else {
    //showName
    showName(savedName);
}