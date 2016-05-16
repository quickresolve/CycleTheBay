var React = require('react-native');

var {
  View,
  Text,
  ListView,
  StyleSheet
} = React;


import currentWeather from "../Api/weatherapi"
import forecast from "../Api/weatherapi"
import weatherIcon from "../Utils/icons"
//constants used for background colors

var mockedCurrent = {
  city: 'San Francisco',
  temperature: '70˚F',
  temp_min: '70˚F',
  temp_max: '70˚F',
  description: 'Sun with light overcast',
  humidity: '40%',
  icon: weatherIcon('01d'),
  rain: '0%',
  wind: '10mph'
};

var mockedForecast = [{
  city: 'Oakland',
  temperature: '70˚F',
  description: 'Sun with light overcast',
  icon: weatherIcon('01d'),
  wind_speed: '10mph',
  wind_direction: 'NW',
  rain: '0%'
  },
  {
    city: 'Oakland',
    temperature: '70˚F',
    description: 'Sun with light overcast',
    icon: weatherIcon('01d'),
    wind_speed: '10mph',
    wind_direction: 'NW',
    rain: '0%'
  }
];

var Weather = React.createClass ({
   getInitialState: function() {
    debugger;
    return {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    };
  },

  componentDidMount: function(){
    // this.getWeather();
    this.getForecast();
  },

  componentWillUnmount: function(){

  },

  getWeather() {
    currentWeather(this.state.latitude, this.state.longitude).then((data) => {
      this.setState(data);
    });
  },

  getForecast() {
    forecast(37, -122).then((data) => {
      console.log(data);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data.list)
      })
    })
  },

renderRow(rowData) {
    return (
      <WeatherCell weather={rowData}/>
  );
},
  render() {
    return (
    <View style={[styles.container, {backgorundColor: this.state.backgorundColor}]}>
      <View style={styles.currentWrapper}>
        <Text>Current Weather</Text>
        <Text>
          // {this.state.city}
          {mockedCurrent.city}
        </Text>
        <View style={styles.horContainer1}>
          <Text style={styles.icon}>
            // {this.state.icon}
            {mockedCurrent.icon}
          </Text>
          <View style={styles.vertContainer}>
            <View style={styles.horContainer2}>
              <Text>
                Max:
                // {this.state.temp_max}
                {mockedCurrent.temp_max}
              </Text>
            </View>
            <View style={styles.horContainer2}>
              <Text>
                Min:
                // {this.state.temp_min}
                {mockedCurrent.temp_min}
              </Text>
            </View>
            <Text>Humidity:
            // {this.state.humidity}
            {mockedCurrent.humidity}
            </Text>
            <Text>Rain:
            // {this.state.rain}
            {mockedCurrent.rain}
            </Text>
            <Text>Wind:
            // {this.state.wind}
            {mockedCurrent.wind}
            </Text>
          </View>
      </View>
        <View style={styles.horContainer2}>
          <Text>
          // {this.state.temperature}
          {mockedCurrent.temperature}
          </Text>
          <Text>
          // {this.state.description}
          {mockedCurrent.description}
          </Text>
        </View>
      </View>
      <View style={styles.forecastWrapper}>
        <Text> Hourly Forecast </Text>
        <ListView style={styles.listContainer} dataSource={this.state.dataSource} renderRow={this.renderRow}/>
      </View>
    </View>
  );
 }
});

var WeatherCell = React.createClass({
  render() {
    return (
      <View>
          <View style={styles.WeatherCell}>
            // <View style={styles.timeContainer}>
            //   <Text style={styles.darkText}>{formattedTime.time}</Text>
            // </View>
            <Text style={styles.icon}>
              {this.state.icon}
            </Text>
            <View style={styles.tempContainer}>
              <Text style={styles.darkText}>{rowData.temperature}</Text>
            </View>
            <Text style={styles.lightText}>Forecast: {rowData.description}</Text>
            <Text style={styles.lightText}>Rain: {rowData.rain}</Text>
            <Text style={styles.lightText}>Wind Speed: {rowData.wind_speed}</Text>
            <Text style={styles.lightText}>Wind Direction: {rowData.wind_direction}</Text>
        </View>
        <View style={styles.seperator}/>
      </View>
    );
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  listContainer: {
    backgroundColor: '#F2F2F2'
  },
  timeContainer: {
    alignItems: 'center',
    marginRight: 20
  },
  seperator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  tempContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  darkText: {
    fontSize: 18
  },
  lightText: {
    color: '#9A9A9A'
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
    padding: 0,
    width: 75,
    height: 75,
    marginRight: 20
  },
  WeatherCell: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 4,
    marginRight: 4,
    padding: 4,
    borderBottomWidth: .5,
    borderColor: 'lightgray'
  }
});

module.exports = Weather;
