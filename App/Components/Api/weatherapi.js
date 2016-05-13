var WEATHER_API_KEY = ‘db8f12a8be0e1eb5’


export default function fetchWeather(city, state) {
  let url = `http://api.wunderground.com/api/${WEATHER_API_KEY}/conditions/q/=${state}/${city}.json`

  return fetch(url).then((response) => response.json())
}
