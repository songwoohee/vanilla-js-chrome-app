const API_KEY = "fb554f2089cd475913f386d63c8c6d7a";

function geoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const location = document.querySelector("#location");
      const weatherStatus = document.querySelector("#weatherStatus");
      const temp = document.getElementById("temp");
      location.innerText = `in ${data.name}`;
      weatherStatus.innerText = `🌤 Today's weather: ${data.weather[0].main}`;
      temp.innerText = `It's ${data.main.temp}°C outside 🌡 `;
    });
}

function geoError() {
  console.log("where!");
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);
