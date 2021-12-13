const POSITION_KEY = "position";
const API_KEY = "9e330c9cee17a99323fa3af35191aa4b";

let position = [];

function getGeoOk(positionInfo) {
    const lat = positionInfo.coords.latitude;
    const lng = positionInfo.coords.longitude;

    const positionObj = {
        lat: lat,
        lng: lng,
    };

    position.push(positionObj);

    localStorage.setItem(POSITION_KEY, JSON.stringify(position));

    const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(API)
    .then(response => response.json())
    .then((data) => {
        const location = document.querySelector("#weather span:first-child");
        const temp = document.querySelector("#weather span:nth-child(2)");
        const 

        weatherIcon.innerText = data.weather[0].icon;
    });
}

function getGeoError() {
    alert("Please allow your position option.");
}

//파라미터로 성공했을 때의 함수, 실패했을 때의 함수를 받는다.
navigator.geolocation.getCurrentPosition(getGeoOk, getGeoError);