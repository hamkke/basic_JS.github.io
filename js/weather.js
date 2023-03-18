const weatherWrap = document.querySelector(".weather-icon-wrap");
const temp = document.querySelector("#weather span:first-child");
const feelsLikeWeather = document.querySelector("#weather span:nth-child(2)");

function onGeoOK(position) {
  const API_KEY = "6df9ec085662aff5c51e5d0ce9241755";
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherIcon = document.createElement("img");
      // console.log(data.weather[0].icon); // 낮:01d, 밤:01n
      const whatWeatherNum = data.weather[0].icon.slice(0, 2);
      weatherIcon.src = `img/${whatWeatherNum}.svg`;
      weatherWrap.prepend(weatherIcon);
      temp.innerText = `현재온도: ${data.main.temp}°`;
      feelsLikeWeather.innerText = `체감 온도: ${data.main.feels_like}°`;
    });
}

function onGeoError() {
  weather.innerText = "위치를 확인할 수 없어요";
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
