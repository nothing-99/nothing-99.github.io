const API_KEY = 'c698d3432979ad386eada5e50a9a5d75';

function onOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector('.weather-container span:nth-child(1)');
      const contry = document.querySelector('.weather-container span:nth-child(2)');
      const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      weather.innerText = data.weather[0].main;
      contry.innerText = data.sys.country;
    });
}
function onError() {
  alert('geolocation Error');
}

navigator.geolocation.getCurrentPosition(onOk, onError);

// {
//   "coord":{"lon":128.4955,"lat":35.8726},
//   "weather":[
//     {
//       "id":800,
//       "main":"Clear",
//       "description":"clear sky",
//       "icon":"01n"
//     }],
//   "base":"stations",
//   "main":{
//     "temp":21.85,
//     "feels_like":22.41,
//     "temp_min":21.85,
//     "temp_max":21.85,
//     "pressure":1006,
//     "humidity":89,
//     "sea_level":1006,
//     "grnd_level":1003},
//   "visibility":10000,
//   "wind":{"speed":0.91,"deg":197,"gust":1.14},
//   "clouds":{"all":0},
//   "dt":1655655087,
//   "sys":{"country":"KR","sunrise":1655669381,"sunset":1655721915},"timezone":32400,"id":1846149,"name":"Shitsukoku","cod":200}
