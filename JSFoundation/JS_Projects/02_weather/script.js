document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityName = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const errorMsg = document.getElementById("error-message");

  const API_KEY = "c5a3883758487f56c8a95b412b0d74f7"; // its always a good idea to store API-key in variable || env variables

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return; // empty strings considered as false in JS

    try {
      const weatherData = await fetchWeatherData(city);
      DisplayWeatherData(weatherData);
    } catch (error) {
      DisplayError();
    }
  });

  async function fetchWeatherData(city) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(URL);
    // console.log(typeof response);
    // console.log(response);

    if (!response.ok) {
      throw new Error("City not Found");
    }

    const data = await response.json(); // convert json-text to Object
    // console.log(data);
    return data;
  }

  function DisplayWeatherData(data) {
    console.log(data);
    const { name, main, weather } = data; // names should be same as in the API
    cityName.textContent = name;
    temperature.textContent = `Temperature: ${main.temp}`;
    description.textContent = `Weather: ${weather[0].description}`;

    // unlock Display
    weatherInfo.classList.remove("hidden");
    errorMsg.classList.add("hidden");
  }

  function DisplayError() {
    weatherInfo.classList.add("hidden");
    errorMsg.classList.remove("hidden");
  }
});
