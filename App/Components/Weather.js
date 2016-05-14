var React = require('react-native');

var {
  View,
  Text,
  StyleSheet
} = React;

// import fetchWeather from "./Api/weatherapi"
// import weatherIcon from "././utils/icons"
// import currentWeather from "./Api/weatherapi"


class Weather extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <View style={styles.currentWrapper}>
        <Text>Current Weather</Text>
      </View>
      <View style={styles.forecastWrapper}>
        <Text> Hourly Forecast </Text>
      </View>
    </View>
  )
 }
};




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
