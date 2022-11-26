const API_KEY = "d9e128b306b6c597725d912524629966";

function onGeoOk(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather span:first-child");
      const city = document.querySelector(".weather span:last-child");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}

function onGeoError() {
  alert("can't find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
