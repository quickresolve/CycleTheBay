var React = require('react-native');

var {
  View,
  Text,
  TouchableHighlight,
  Navigator,
  Image,
  TouchableOpacity,
  navigator,
  Icon,
  StyleSheet
} = React;

import Weather from "./Weather"
import Trail from './Trail'
import TrailList from './TrailList'
import Local from './Local'


class Main extends React.Component {
  render() {
    return(
      <View
        style={styles.container}>
        <Image
          source={{uri: "http://i.imgur.com/WcH381M.jpg"}}
          style={styles.backgroundImage}>
          <Text
            style={styles.title}>
            CycleTheBay
          </Text>
          <TouchableHighlight
            style={styles.navButton}
            underlayColor="transparent"
            onPress={this._onTrailsButton.bind(this)}>
            <Text
              style={styles.navText}>
                Trail List
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.navButton}
            underlayColor="transparent"
            onPress={this._onMapsButton.bind(this)}>
            <Text
              style={styles.navText}>
                Overhead Map
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.navButton}
            underlayColor="transparent"
            onPress={this._onWeatherButton.bind(this)}>
            <Text
              style={styles.navText}>
                Live Weather
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.navButton}
            underlayColor="transparent"
            onPress={this._onLocalButton.bind(this)}>
            <Text
              style={styles.navText}>
                Local Attractions
            </Text>
          </TouchableHighlight>
        </Image>
      </View>
    );
  }

  _onHomeButton(){
    this.props.navigator.push({
      component: Main,
      name: "Main"
    })
  }

  _onTrailsButton(){
    this.props.navigator.push({
      component: TrailList,
      name: "Trails",
    });
  }

  _onMapsButton(){
    this.props.navigator.push({
      component: Maps,
      name: "Map"
    })
  }

  _onWeatherButton() {
    this.props.navigator.push({
      component: 'Weather',
      name: "Weather"
    })
  }

  _onLocalButton(){
    this.props.navigator.push({
      component: 'Local',
      name: "Local"
    })
  }
};


var styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'stretch'
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 50,
    marginBottom: 65,
    color: 'white',
  },
  navButton: {
    height: 40,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#d9d9d9',
    backgroundColor: '#9f6565',
    borderRadius: 10,
    marginBottom: 5
  },
  navText: {
    fontSize: 20,
    color: 'white'
  }

  // mainContainer: {
  //   flex: 1,
  //   padding: 30,
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   backgroundColor: '#658D9F'
  // },
  // title: {
  //   marginBottom: 10,
  //   fontSize: 25,
  //   textAlign: 'center',
  //   color: 'white'
  // },
  // backgroundImg: {
  //   flex: 1,
  //   resizeMode: 'cover'
  // },
  // button: {
  //   backgroundColor: 'white',
  //   borderColor: 'white',
  //   borderWidth: 3,
  //   borderRadius: 10,
  //   alignSelf: 'stretch',
  //   justifyContent: 'center'
  // },
  // buttonText:{
  //   color: '#658D9F',
  //   fontSize: 15,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // footerNav: {
  //   flex: 0,
  //   flexDirection: 'row',
  //   borderTopWidth: 1,
  //   alignSelf: 'stretch',
  //   justifyContent: 'space-between',
  //   paddingTop: 10
  // }
});

module.exports = Main;
