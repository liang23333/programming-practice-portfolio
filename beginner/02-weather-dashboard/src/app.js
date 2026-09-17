/**
 * Weather Dashboard Application Logic
 * Supports live API queries and built-in offline mock data fallback.
 */

// Configuration
const USE_MOCK_FALLBACK = true;
const API_KEY = ""; // Insert OpenWeatherMap API key here for live queries

// Pre-defined mock data for instant offline testing
const MOCK_WEATHER_DATA = {
  "tokyo": {
    city: "Tokyo, Japan",
    temp: 19,
    condition: "Sunny & Mild",
    icon: "☀️",
    humidity: "42%",
    wind: "11 km/h",
    highLow: "21° / 14°",
    forecast: [
      { day: "Tomorrow", icon: "🌤️", temp: "20°" },
      { day: "Friday", icon: "🌧️", temp: "16°" },
      { day: "Saturday", icon: "☀️", temp: "22°" }
    ]
  },
  "new york": {
    city: "New York, USA",
    temp: 14,
    condition: "Partly Cloudy",
    icon: "⛅",
    humidity: "58%",
    wind: "18 km/h",
    highLow: "16° / 10°",
    forecast: [
      { day: "Tomorrow", icon: "🌧️", temp: "13°" },
      { day: "Friday", icon: "⛅", temp: "15°" },
      { day: "Saturday", icon: "☀️", temp: "18°" }
    ]
  },
  "london": {
    city: "London, UK",
    temp: 12,
    condition: "Overcast & Light Drizzle",
    icon: "🌧️",
    humidity: "78%",
    wind: "22 km/h",
    highLow: "14° / 8°",
    forecast: [
      { day: "Tomorrow", icon: "🌦️", temp: "13°" },
      { day: "Friday", icon: "⛅", temp: "15°" },
      { day: "Saturday", icon: "🌧️", temp: "11°" }
    ]
  },
  "san francisco": {
    city: "San Francisco, USA",
    temp: 16,
    condition: "Breezy & Clear",
    icon: "🌤️",
    humidity: "62%",
    wind: "24 km/h",
    highLow: "18° / 11°",
    forecast: [
      { day: "Tomorrow", icon: "☀️", temp: "19°" },
      { day: "Friday", icon: "🌤️", temp: "17°" },
      { day: "Saturday", icon: "🌫️", temp: "15°" }
    ]
  }
};

// DOM Elements
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const statusMessage = document.getElementById("status-message");
const weatherDisplay = document.getElementById("weather-display");
const chipButtons = document.querySelectorAll(".chip");

// Event Listeners
searchBtn.addEventListener("click", () => handleSearch(cityInput.value));
cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleSearch(cityInput.value);
});

chipButtons.forEach((chip) => {
  chip.addEventListener("click", () => {
    const city = chip.getAttribute("data-city");
    cityInput.value = city;
    handleSearch(city);
  });
});

async function handleSearch(city) {
  const query = city.trim().toLowerCase();
  if (!query) {
    showStatus("Please enter a city name to search.", "error");
    return;
  }

  showStatus("Fetching weather data...", "loading");

  try {
    let data;
    if (API_KEY) {
      // Live API mode
      data = await fetchLiveWeather(query);
    } else {
      // Offline / Portfolio mock mode
      await new Promise((resolve) => setTimeout(resolve, 350)); // simulate network delay
      data = MOCK_WEATHER_DATA[query] || generateFallbackWeather(city);
    }

    renderWeather(data);
    hideStatus();
  } catch (err) {
    showStatus(`Failed to load weather: ${err.message}`, "error");
  }
}

async function fetchLiveWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`City not found or API error (Status: ${response.status})`);
  }
  const raw = await response.json();
  return {
    city: `${raw.name}, ${raw.sys.country}`,
    temp: Math.round(raw.main.temp),
    condition: raw.weather[0].description,
    icon: "🌤️",
    humidity: `${raw.main.humidity}%`,
    wind: `${Math.round(raw.wind.speed * 3.6)} km/h`,
    highLow: `${Math.round(raw.main.temp_max)}° / ${Math.round(raw.main.temp_min)}°`,
    forecast: [
      { day: "Day +1", icon: "☀️", temp: `${Math.round(raw.main.temp + 1)}°` },
      { day: "Day +2", icon: "⛅", temp: `${Math.round(raw.main.temp - 1)}°` },
      { day: "Day +3", icon: "🌧️", temp: `${Math.round(raw.main.temp - 2)}°` }
    ]
  };
}

function generateFallbackWeather(cityName) {
  const randomTemp = 15 + Math.floor(Math.random() * 12);
  return {
    city: cityName.charAt(0).toUpperCase() + cityName.slice(1),
    temp: randomTemp,
    condition: "Scattered Clouds",
    icon: "⛅",
    humidity: "55%",
    wind: "14 km/h",
    highLow: `${randomTemp + 3}° / ${randomTemp - 4}°`,
    forecast: [
      { day: "Tomorrow", icon: "🌤️", temp: `${randomTemp + 1}°` },
      { day: "Next Day", icon: "☀️", temp: `${randomTemp + 2}°` },
      { day: "Day After", icon: "🌧️", temp: `${randomTemp - 2}°` }
    ]
  };
}

function renderWeather(data) {
  document.getElementById("city-name").textContent = data.city;
  document.getElementById("current-temp").textContent = data.temp;
  document.getElementById("weather-desc").textContent = data.condition;
  document.getElementById("weather-icon").textContent = data.icon;
  document.getElementById("humidity-val").textContent = data.humidity;
  document.getElementById("wind-val").textContent = data.wind;
  document.getElementById("temp-range").textContent = data.highLow;
  document.getElementById("local-time").textContent = `Updated ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

  const forecastGrid = document.getElementById("forecast-cards");
  forecastGrid.innerHTML = "";
  data.forecast.forEach((item) => {
    const card = document.createElement("div");
    card.className = "forecast-card";
    card.innerHTML = `
      <div class="forecast-day">${item.day}</div>
      <div class="forecast-icon">${item.icon}</div>
      <div class="forecast-temp">${item.temp}</div>
    `;
    forecastGrid.appendChild(card);
  });

  weatherDisplay.classList.remove("hidden");
}

function showStatus(msg, type) {
  statusMessage.textContent = msg;
  statusMessage.className = `status-banner ${type}`;
}

function hideStatus() {
  statusMessage.className = "status-banner hidden";
}

// Load default city on startup
window.addEventListener("DOMContentLoaded", () => {
  handleSearch("Tokyo");
});
