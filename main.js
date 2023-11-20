// // https://api.openweathermap.org/data/2.5/weather?q=bareilly&appid=
// // We have two active keys
// // 878405627c268825209cd76c119b1238
// // 329c37e7b71f80030ea0cb51701aca5d

// const apiKey = "878405627c268825209cd76c119b1238";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const searchBox = document.querySelector(".search input");
// const searchButton = document.querySelector(".search button");
// const a = "https://api.openweathermap.org/data/2.5/weather?q=bareilly&appid=878405627c268825209cd76c119b1238";


// async function checkWeather() {
//   const response = await fetch(a);

/**
 * below is the error i did during fetching api, i used "apiKey" instead of "apiUrl"
 */
//   // (apiKey + city + `&appid=${apiKey}`); //




//   var data = await response.json();
//   console.log(data);
//   document.querySelector(".city").innerHTML = data.name;
//   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
//   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//   document.querySelector(".wind").innerHTML = math.round(data.wind.speed) + " Km/h";
// }

// searchButton.addEventListener('click', () => {
//   checkWeather();
// });

const searchButton = document.querySelector(".search button");
const searchBox = document.querySelector(".search input");
const apiKey = "878405627c268825209cd76c119b1238";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var weatherIcon = document.querySelector(".weather-icon");

// const a = "https://api.openweathermap.org/data/2.5/weather?q=bareilly&appid=878405627c268825209cd76c119b1238";
// ${apiKey}

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " Km/h";


  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "/images/clouds.png";
  }
  else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "/images/Clear.png";
  }
  else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "/images/drizzle.png";
  }
  else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "/images/mist.png";
  }
  else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "/images/rain.png";
  }
  else {
    weatherIcon.src = "/images/snow.png";
  }


};


searchButton.addEventListener('click', () => {
  checkWeather(searchBox.value);
});