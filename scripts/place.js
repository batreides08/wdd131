document.addEventListener("DOMContentLoaded", () => {
  // Display last modified date in the footer
  const lastMod = document.lastModified;
  document.getElementById("lastModified").textContent = lastMod;

 
  const currentYear = new Date().getFullYear();

  // Static values for weather
  const temperatureC = 10; // degrees Celsius
  const windSpeedKmh = 5;  // kilometers per hour

  // Function to calculate wind chill (in Celsius)
  function calculateWindChill(tempC, speedKmh) {
    return (
      13.12 +
      0.6215 * tempC -
      11.37 * Math.pow(speedKmh, 0.16) +
      0.3965 * tempC * Math.pow(speedKmh, 0.16)
    ).toFixed(1);
  }

  // Only show wind chill if temperature ≤ 10°C and wind speed > 4.8 km/h
  const windChillElement = document.querySelector("#windChill");

  if (temperatureC <= 10 && windSpeedKmh > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperatureC, windSpeedKmh)} °C`;
  } else {
    windChillElement.textContent = "N/A";
  }
});
