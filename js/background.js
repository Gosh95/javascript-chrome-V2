const body = document.body;
const leftRemoteBtn = document.querySelector(".background-remote span:first-child");
const rightRemoteBtn = document.querySelector(".background-remote span:last-child");
const backgroundColor = ["rgb(252, 250, 249)", "rgb(189, 173, 165)", "rgb(202, 101, 70)",  " rgb(243, 161, 119)", "rgb(197, 76, 16)", "rgb(133, 122, 235)", "rgb(109, 201, 86)"];


let randomIdx;
const bgSize = backgroundColor.length;
function initBg() {
    randomIdx = Math.floor(Math.random() * bgSize);
    body.style.backgroundColor = backgroundColor[randomIdx];
}

initBg();

function handleLeftBtn() {
    --randomIdx;

    if(randomIdx < 0) {
        randomIdx %= bgSize;
    }

    body.style.backgroundColor = backgroundColor[(bgSize + randomIdx) % bgSize];
}

function handleRightBtn() {
    body.style.backgroundColor = backgroundColor[++randomIdx % bgSize];
}

leftRemoteBtn.addEventListener("click", handleLeftBtn);
rightRemoteBtn.addEventListener("click", handleRightBtn);
