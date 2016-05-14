// Weather Underground
var WEATHER_API_KEY = "db8f12a8be0e1eb5"


export default function fetchWeather(city, state) {
  let url = `http://api.wunderground.com/api/${WEATHER_API_KEY}/conditions/q/=${state}/${city}.json`

  return fetch(url).then((response) => response.json())
}



// Open Weather Map 5 day / 3 hour
var hourlyUrl = 'http://api.openweathermap.org/data/2.5/forecast?APPID=f557b20727184231a597c710c8be3106'
var currentWeatherUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=f557b20727184231a597c710c8be3106'


var kelvinToF = (kelvin) => {
  return Math.round((kelvin - 273.15) * 1.8 + 32) + " ˚F"
}


export default function currentWeather(latitude, longitude) {
  var url = `${currentWeatherUrl}&lat=${latitude}&lon=${longitude}`;

  return fetch(url).then((response) => response.json())
    .then((response) => {
      return {
        city: json.name,
        temperature: kelvinToF(json.main.temp),
        description: json.weather[0].description
      }
    });
}
