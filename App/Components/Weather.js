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

class Weather extends React.Component ({
  constructor(props){
    super(props),
    this.state = {
      isLoading: false,
      backgorundColor: "#FFFFFF",
      latitude: '37',
      longitude: '-122',
      var dataSource = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1.dt !== r2.dt
      })
      // getWeather(latitude, longitude);
      // getForecast(latitude, longitude);
    };
  },
  //  getInitialState: function() {
  //   return {
   //
  //     // city: 'city',
  //     // temperature: '0 ˚F',
  //     // temp_min: '0 ˚F',
  //     // temp_max: '0 ˚F',
  //     // description: 'description',
  //     // humidity: 0,
  //     // icon: weatherIcon(),
  //     // rain: 0,
  //     // wind: 0,
  //     // wind_speed: 0,
  //     // wind_direction: 0,
  //   };

  // },
  getWeather() {
    currentWeather(this.state.latitude, this.state.longitude).then((data) => {
      this.setState(data);
    });
  },

  getForecast() {
    forecast(this.state.latitude, this.state.longitude).then((data) => {
      this.setState(data);
      dataSource: this.state.dataSource.cloneWithRows(data)
    });
  },
  renderRow(rowData, sectionId, rowId) {
    // var formattedTime = this.formatDateTime(rowData.dt);
    return (
      <View>
        <View style={styles.container}>
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
        <ListView style={styles.listContainer} dataSource={this.state.dataSource} renderRow={this.renderRow}/>
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
  }
});

module.exports = Weather;
