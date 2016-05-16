import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  MapView,
  ScrollView,
  TabBarIOS,
  navigator,
  TouchableOpacity,
  View
} from 'react-native';

import Weather from "./Weather"
import Trail from './Trail'
import TrailList from './TrailList'
import Main from "./Main"


var Local = React.createClass ({
  getInitialState: function() {
    return {
      pin: {
        latitude: 37,
        longitude: -122
      },
      region: {
        latitude: 37,
        longitude: -122,
        latitudeDelta: 2,
        longitudeDelta: 2
      }
    };
  },

  render() {
    return(
      <View style={styles.container}>
        <MapView style={styles.map}
          // annotations={this.state.pin}
          showsUserLocation={true}
          region={this.state.region}
          mapType={'hybrid'}
          followUserLocation={true}>
        </MapView>
        <View style={styles.footerNav}>
          <TouchableHighlight
            onPress={this._onHomeButton}
            style={styles.button}
            underlayColor="gray">
              <Text style={styles.buttonText}>Home</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this._onMapsButton}
            style={styles.button}
            underlayColor="gray">
              <Text style={styles.buttonText}>Maps</Text>
          </TouchableHighlight>
          <TouchableHighlight
          onPress={this._onTrailsButton}
          style={styles.button}
          underlayColor="gray">
            <Text style={styles.buttonText}>Trails</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this._onWeatherButton}
            style={styles.button}
            underlayColor="gray">
              <Text style={styles.buttonText}>Weather</Text>
          </TouchableHighlight>
          <TouchableHighlight
          onPress={this._onLocalButton}
          style={styles.button}
          underlayColor="gray">
            <Text style={styles.buttonText}>Local</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  },

  _onHomeButton(){
    this.props.navigator.push({
      component: Main,
      name: "Main"
    })
  },

  _onTrailsButton(){
    this.props.navigator.push({
      component: TrailList,
      name: "Trails",
    });
  },

  _onMapsButton(){
    this.props.navigator.push({
      component: Maps,
      name: "Map"
    })
  },

  _onWeatherButton() {
    this.props.navigator.push({
      component: 'Weather',
      name: "Weather"
    })
  },

  _onLocalButton(){
    this.props.navigator.push({
      component: 'Local',
      name: "Local"
    })
  }
});




var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  map: {
    flex:2,
    marginTop: 30
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
    borderWidth: 3,
    borderRadius: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText:{
    color: '#658D9F',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerNav: {
    flex: 0,
    flexDirection: 'row',
    borderTopWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    paddingTop: 10
  }
});





module.exports = Local;
