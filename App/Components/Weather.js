var React = require('react-native');

var {
  View,
  MapView,
  Text,
  ListView,
  StyleSheet
} = React;

import fetchWeather from "./Api/weatherapi"
import weatherIcon from "././utils/icons"
import currentWeather from "./Api/weatherapi"


class Weather extends React.Component {
  getInitialState() {
    return {
      pin: {
        latitude: 0,
        longitude: 0
      },
      city: '',
      temperature: '',
      description: ''
    };
  }
  render() {
    return <MapView
    annotations={[this.state.pin]}
    onRegionChangeComplete={this.onRegionChangeComplete}
    style={styles.map}></MapView>
  }
  onRegionChangeComplete(region) {
    this.setState({
      pin: {
        longitude: region.longitude,
        latitude: region.latitude
      }
    });

  // currentWeather(region.latitude, region.longitude) {
  //   .then((data) => {
  //     console.log(data);
  //     this.setState(data);
  //   })
  // }
  }


  // Render weather hourly forecast

};

var styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

module.exports = Weather;
