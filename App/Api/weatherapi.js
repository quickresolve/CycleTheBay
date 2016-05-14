// // Weather Underground
// var WEATHER_API_KEY = "db8f12a8be0e1eb5"
//
//
// export default function fetchWeather(city, state) {
//   let url = `http://api.wunderground.com/api/${WEATHER_API_KEY}/conditions/q/=${state}/${city}.json`
//
//   return fetch(url).then((response) => response.json())
// }



// Open Weather Map 5 day / 3 hour
var weatherapi = {
  baseUrl: 'http://api.openweathermap.org/data/2.5/',
  hourlyUrl: 'forecast',
  currentWeatherUrl: 'weather',
  API_KEY = '?APPID=4a55512194ca2751c9dec4fd1fa57028'
}

var kelvinToF = (kelvin) => {
  return Math.round((kelvin - 273.15) * 1.8 + 32) + " ˚F"
}


export default function currentWeather(latitude, longitude) {
  var url = `${baseUrl}&${currentWeatherUrl}&lat=${latitude}&lon=${longitude}&${API_KEY}`;

  return fetch(url).then((response) => response.json())
    .then((response) => {
      return {
        city: json.name,
        temperature: kelvinToF(json.main.temp),
        temp_min: kelvinToF(json.main.temp_min),
        temp_max: kelvinToF(json.main.temp_max),
        description: json.weather[0].description,
        humidity: json.main.humidity,
        icon: json.weather[0].icon,
        rain: json.rain,
        wind: json.wind.speed
      }
    });
}

export default function forecast(latitude, longitude) {
  var url = `${baseUrl}&${hourlyUrl}&lat=${latitude}&lon=${longitude}&${API_KEY}`

  return fetch(url).then((response) => response.json())
    .then((response) => {
      return {
        city: json.name
        temperature: kelvinToF(json.list.main.temp),
        description: json.weather[0].description,
        icon: json.weather[0].icon,
        wind_speed: json.list.wind.speed,
        wind_direction: json.list.wind.deg,
        rain: json.list.rain
      }
    })
}