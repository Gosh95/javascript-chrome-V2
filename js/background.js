const imgFiles = ["0.jpeg", "1.jpeg", "2.jpeg"];
const imgTag = document.createElement("img");
imgTag.classList.add("background");
function changeBackground() {
    const randomImg = imgFiles[Math.floor(Math.random() * imgFiles.length)];
    const background = `img/${randomImg}`;

    imgTag.src = background;

    document.body.appendChild(imgTag);
}

changeBackground();
setInterval(changeBackground, 30000);