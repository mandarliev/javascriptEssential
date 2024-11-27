function showWeatherDetails(event) {
  event.preventDefault();
  const latitude = document.getElementById("latitude").value;
  const longitude = document.getElementById("longitude").value;

  const apiKey = "314ad588ed7abe7b6148b3a2a5cc8ceb";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
            <p>Humidity: ${data.main.pressure} &#8451;</p>
            <p>Wind speed: ${data.wind.speed}</p>`;
    })
    .catch((error) => {
      console.error("Error fetching weather:", error);
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

document
  .getElementById("weatherForm")
  .addEventListener("submit", showWeatherDetails);
