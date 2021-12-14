const POSITION_KEY = "position";
const API_KEY = "9e330c9cee17a99323fa3af35191aa4b";
const infoBtn = document.querySelector(".weather-icon span");
const weatherInfo = document.querySelector(".hidden");
const HIDDEN_CLASS = "hidden";
const WEATHERINFO_CLASS = "weather-info";

function getGeoOk(positionInfo) {
    const lat = positionInfo.coords.latitude;
    const lng = positionInfo.coords.longitude;

    const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(API)
    .then(response => response.json())
    .then((data) => {
        const icon = document.querySelector(".weather-icon img");
        const location = document.querySelector(".hidden span:first-child");
        const temp = document.querySelector(".hidden span:last-child");

        const iconCode = data.weather[0].icon;
        icon.setAttribute("src", `weathericons/${iconCode}.png`);

        const city = data.name;
        const country = data.sys.country;
        location.innerText = `location: ${city} in "${country}"`;

        temp.innerText = `temperature: ${data.main.temp}°C`;
    });
}

function getGeoError() {
    alert("Please allow your position option.");
}

//파라미터로 성공했을 때의 함수, 실패했을 때의 함수를 받는다.
navigator.geolocation.getCurrentPosition(getGeoOk, getGeoError);

//날씨 상세 정보 열고 닫기
function handleWeatherInfo() {
    weatherInfo.classList.toggle(WEATHERINFO_CLASS);
    weatherInfo.classList.toggle(HIDDEN_CLASS);

    if(infoBtn.textContent == "▲") {
        infoBtn.innerText = "▼";
    } else if(infoBtn.textContent == "▼") {
        infoBtn.innerText = "▲";
    }

    
}

infoBtn.addEventListener("click", handleWeatherInfo);