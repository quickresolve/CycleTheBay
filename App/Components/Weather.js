var React = require('react-native');

var {
  View,
  Text,
  StyleSheet
} = React;


import currentWeather from "../Api/weatherapi"
import forecast from "../Api/weatherapi"


var Weather = React.createClass ({
   getInitialState: function() {
    return {
      weatherData: null,
      backgorundColor: "#FFFFFF"
      // latitude: '37',
      // longitude: '-122'
    };
  },
  render() {
    return (
    <View style={[styles.container, {backgorundColor: this.state.backgorundColor}]}>
      <View style={styles.currentWrapper}>
        <Text>Current Weather</Text>
      </View>
      <View style={styles.forecastWrapper}>
        <Text> Hourly Forecast </Text>
      </View>
    </View>
  );
 }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  currentWrapper: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  forecastWrapper: {
    flex: 5
  }
});

module.exports = Weather;
