var React = require('react-native');

var {
  View,
  MapView,
  Text,
  ListView,
  StyleSheet
} = React;

import fetchWeather from "./App/Api/weatherapi"
import weatherIcon from "././utils/icons"
import currentWeather from "./App/Api/weatherapi"


class Weather extends React.Component {
  getInitialState() {
    return {
      pin: {
        latitude: 0,
        longitude: 0
      }
      icon: weatherIcon()
    };
  },
  render() {
    return <MapView
    annotations={[this.state.pin]}
    onRegionChangeComplete={this.onRegionChangeComplete}
    style={styles.map}></Map>
  },
  onRegionChangeComplete(region) {
    this.setState({
      pin: {
        longitude: region.longitude,
        latitude: region.latitude
      }
      city: '',
      temperature: '',
      description: ''
    });

  currentWeather(region.latitude, region.longitude) {
    .then((data) => {
      console.log(data);
      this.setState(data);
    })
  }
  }


  // Render weather hourly forecast

};

var styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

module.exports = Weather;
