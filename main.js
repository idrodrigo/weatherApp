import "./style.css";

document.querySelector("#app").innerHTML = `
<div class="card">
<div class="search">
    <input type="text" placeholder="enter a city name" spellcheck="false">
    <button><img src="./images/search.PNG" alt="search icon"></button>
</div>
<div class="error">
    <p>Invalid City Name</p>
</div>
<div class="empty-error">
    <p>Please enter a city name  </p>
</div>
<div class="weather">
    <img src="./images/rain.PNG" class="weather-icon" alt="raining image">
    <h1 class="temp">22°C</h1>
    <h2 class="city">New York</h2>
    <div class="details">
        <div class="col">
            <img src="./images/humidity.PNG" alt="humidity image">
            <div>
                <p class="humidity">50%</p>
                <p>humidity</p>
            </div>
        </div>
        <div class="col">
            <img src="./images/wind.PNG" alt="wind image">
            <div>
                <p class="wind">15 km/h</p>
                <p>wind</p>
            </div>
        </div>
    </div>
</div>
</div>
`;
