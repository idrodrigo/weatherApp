const apiKey = "9644790e1745234ca9cfbc086b720185";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let errorDisplay = document.querySelector(".error").style.display;
  let weatherDisplay = document.querySelector(".weather").style.display;
  let emptyDisplay = document.querySelector(".empty-error").style.display;

  if (response.status === 404) {
    errorDisplay = "block";
    weatherDisplay = "none";
    emptyDisplay = "none";
  }

  if (response.status === 400) {
    weatherDisplay = "none";
    emptyDisplay = "block";
    errorDisplay = "none";
  }

  errorDisplay = "none";
  emptyDisplay = "none";

  const data = await response.json();
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  document.querySelector(".weather").style.display = "block";
  let img = data.weather[0].main.toLowerCase();
  weatherIcon.src = `./images/${img}.png`;
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
