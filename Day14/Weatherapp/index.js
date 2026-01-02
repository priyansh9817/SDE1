const btn = document.getElementById("btn");
const result = document.getElementById("result");

const API_KEY = "1775bf3f90ee105736755caf4df91dda";

btn.addEventListener("click", async () => {
  const city = document.getElementById("city").value.trim();

  if (!city) {
    result.innerText = "Please enter a city name";
    return;
  }

  try {
    result.innerText = "Loading...";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    result.innerHTML = `
      <strong>City:</strong> ${data.name}<br>
      <strong>Temperature:</strong> ${data.main.temp} °C<br>
      <strong>Weather:</strong> ${data.weather[0].description}
    `;
  } catch (error) {
    result.innerText = error.message;
  }
});
