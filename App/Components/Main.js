var React = require('react-native');

var {
  View,
  Text,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  navigator,
  Icon,
  StyleSheet
} = React;

import Weather from "./Weather"
import Trail from './Trail'
import Tabs from './Tabs'
import Local from './Local'
import TrailList from './TrailList'


var Main = React.createClass({
  return (
    <View style={styles.mainContainer}>
      <SplashPageView />
      <FooterNavView />
    </View>
  );
});

class SplashPageView extends React.Component {
  render() {
    return(
      <Text style={styles.title}>Cycle the Bay</Text>
    );
  }
};

class FooterNavView extends React.Component {
  render() {
    return(
      <View style={styles.footerNav}>
      <TouchableHighlight
        onPress={this._onCycleButton.bind(this)}
        style={styles.button}
        underlayColor="gray">
        <Icon
          name='ion|beer'
          size={150}
          color='#887700'
          style={styles.beer}
        />
          // <Text style={styles.buttonText}>Trails</Text>
      </TouchableHighlight>
      <TouchableHighlight
      onPress={this._onCycleButton.bind(this)}
      style={styles.button}
      underlayColor="gray">
      </TouchableHighlight>
      <TouchableHighlight
        onPress={this._onWeatherButton.bind(this)}
        style={styles.button}
        underlayColor="gray">
          // <Text style={styles.buttonText}>Weather</Text>
      </TouchableHighlight>
      <TouchableHighlight
      onPress={this._onLocalButton.bind(this)}
      style={styles.button}
      underlayColor="gray">
        // <Text style={styles.buttonText}>Local</Text>
      </TouchableHighlight>
      </View>
    );
  }

  _onCycleButton(){
    this.props.navigator.push({
      component: TrailList,
      title: "Trails",
    });
  }

  _onWeatherButton() {
    this.props.navigator.push({
      component: Weather,
      title: "Weather"
    })
  }

  _onLocalButton(){
    this.props.navigator.push({
      component: Local,
      title: "Local Attractions"
    })
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
  splashPage: {
    flex: 9
  },
  title: {
    marginBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  },
  button: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText:{
    color: '#658D9F',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerNav: {
    flex: 0,
    borderTopWidth: 1
  }
});

module.exports = Main;
