var React = require('react-native');

var {
  View,
  Text,
  StyleSheet
} = React;

import fetchWeather from "./api/api"
import weatherIcon from "././utils/icons"


const WeatherAppNative = React.createClass ({

  getInitialState() {
    return {
      city: "Oakland",
      country: "United States",
      icon: weatherIcon()
    };
  },

  // Render weather hourly forecast

})
