var React = require('react-native');

var {
  View,
  Text,
  TouchableHighlight,
  navigator,
  StyleSheet
} = React;

// import Weather from './Weather'


// var Weather = require("Weather");
import Weather from "./Weather"
import Trail from './Trail'


class Main extends React.Component{
  render() {
    return(
      <View style ={styles.mainContainer}>
        <Text style={styles.title}>Cycle the Bay</Text>
        <TouchableHighlight
          // onPress={this._onCycleButton.bind(this)}
          style={styles.button}
          underlayColor="gray">
            <Text style={styles.buttonText}>Trails</Text>
        </TouchableHighlight>
        <TouchableHighlight
          // onPress={this._onWeatherButton.bind(this)}
          style={styles.button}
          underlayColor="gray">
            <Text style={styles.buttonText}>Weather</Text>
        </TouchableHighlight>
      </View>
    )
  }
  _onCycleButton(){
    this.props.navigator.push({
      component: Trail
    });
  }
  _onWeatherButton(){
    this.props.navigator.push({
      component: Weather
    });
  }
};

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#658D9F'
  },
  title: {
    marginBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText:{
    color: '#658D9F'
  }
});

module.exports = Main;
