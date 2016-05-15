var React = require('react-native');

var {
  View,
  Text,
  StyleSheet
} = React;


import currentWeather from "../Api/weatherapi"
import forecast from "../Api/weatherapi"
import weatherIcon from "../Utils/icons"
//constants used for background colors

var BG_HOT ="#FB9F4D";
var BG_WARM ="#FBD84D";
var BG_COLD ="#00ABE6";


var Weather = React.createClass ({
   getInitialState: function() {
    return {
      // weatherData: null,
      backgorundColor: "#FFFFFF",
      latitude: '37',
      longitude: '-122',
      city: 'city',
      temperature: '0 ˚F',
      temp_min: '0 ˚F',
      temp_max: '0 ˚F',
      description: 'description',
      humidity: 0,
      icon: weatherIcon(),
      rain: 0,
      wind: 0,
      wind_speed: 0,
      wind_direction: 0
    };
  },
  getWeather() {
    currentWeather(this.state.latitude, this.state.longitude).then((data) => {
      let weatherList = response
      this.setState(data);
    });
  },
  render() {
    return (
    <View style={[styles.container, {backgorundColor: this.state.backgorundColor}]}>
      <View style={styles.currentWrapper}>
        <Text>Current Weather</Text>
        <Text>
          {this.state.city}
        </Text>
        <View style={styles.horContainer1}>
          <Text style={styles.icon}>
            {this.state.icon}
          </Text>
          <View style={styles.vertContainer}>
            <View style={styles.horContainer2}>
              <Text>Max: {this.state.temp_max}</Text>
            </View>
            <View style={styles.horContainer2}>
              <Text>Min: {this.state.temp_min}</Text>
            </View>
            <Text>Humidity: {this.state.humidity}</Text>
            <Text>Rain: {this.state.rain}</Text>
            <Text>Wind: {this.state.wind}</Text>
          </View>
      </View>
        <View style={styles.horContainer2}>
          <Text>{this.state.temperature}</Text>
          <Text>{this.state.description}</Text>
        </View>
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
  horContainer1: {
    flexDirection: 'row',
    marginBottom: 20
  },
  horContainer2: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  vertContainer: {
    flex: 1,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#CCCCCC',
    padding: 15
  },
  currentWrapper: {
    flex: 3,
    padding: 20,
    marginTop: 65,
    backgroundColor: '#F2F2F2'
  },
  forecastWrapper: {
    flex: 5
  },
  icon: {
    // fontFamily: 'WeatherIcons-Regular',
    padding: 0
  }
});

module.exports = Weather;
