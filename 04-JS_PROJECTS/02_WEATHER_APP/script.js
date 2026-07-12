document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");

    const API_KEY = "5222dff0df182ece832fa343351da593"; // IMPORTANT: Add your own API key here
    getWeatherBtn.addEventListener("click", async () => {
        const city = cityInput.value.trim();
        if (!city) return;

        try {
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            showError(error.message);
        }
    });

    async function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "City not found");
        }
        const data = await response.json();
        return data;
    }

    function displayWeatherData(data) {
        const { name, main, weather } = data;
        cityNameDisplay.textContent = name;
        temperatureDisplay.textContent = `Temperature: ${main.temp} °C`;
        descriptionDisplay.textContent = `Description: ${weather[0].description}`;
        weatherInfo.classList.remove("hidden");
        errorMessage.classList.add("hidden");
    }

    function showError(message) {
        errorMessage.textContent = message;
        weatherInfo.classList.add("hidden");
        errorMessage.classList.remove("hidden");
    }
});