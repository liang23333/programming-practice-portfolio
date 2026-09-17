# 02 - Real-Time Weather Dashboard

> An asynchronous web dashboard that fetches and displays live weather conditions and multi-day forecasts using the browser Fetch API.

---

## 📌 Project Overview

This project demonstrates core front-end asynchronous patterns:
- Interfacing with third-party RESTful APIs using `fetch()` and `async/await`.
- Handling JSON response payloads and dynamically updating the Document Object Model (DOM).
- Providing built-in mock fallback data so the dashboard works instantly without requiring an API key.
- Responsive CSS card layout with mobile-first design and clean aesthetics.

---

## 🛠️ Tech Stack & Concepts

- **Frontend**: Semantic HTML5, Modern CSS (Flexbox & CSS Variables), Vanilla JavaScript (ES6+).
- **External API Support**: OpenWeatherMap API / WeatherAPI format.
- **Key Concepts**:
  - Asynchronous HTTP requests (`fetch`, `Promise`, `async/await`)
  - Try/catch defensive error handling & user-friendly error banners
  - Dynamic template rendering and DOM element creation
  - Client-side data caching / mock fallback mode

---

## 🚀 How to Run

### Option 1: Direct File Open
Simply open `src/index.html` in your web browser:
```bash
# macOS
open beginner/02-weather-dashboard/src/index.html

# Linux
xdg-open beginner/02-weather-dashboard/src/index.html
```

### Option 2: Local HTTP Server
```bash
python3 -m http.server --directory beginner/02-weather-dashboard/src 8080
```
Then visit `http://localhost:8080` in your browser.

---

## ⚙️ Using a Real OpenWeatherMap API Key (Optional)

1. Sign up for a free key at [OpenWeatherMap](https://openweathermap.org/api).
2. Open `src/app.js`.
3. Set `API_KEY = "your_actual_key_here"` and toggle `USE_MOCK_DATA = false`.
