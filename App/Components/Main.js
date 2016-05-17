"use strict";

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Navigator,
  Image,
  TouchableOpacity,
  navigator,
  Icon,
  StyleSheet
} from 'react-native';

import Weather from "./Weather"
import Trail from './Trail'
import TrailList from './TrailList'
import Local from './Local'
import Map from './Map'

class Main extends Component {
  render() {
    return(
      <View
        style={styles.container}>
        <Image
          source={require('../../biking.gif')}
          style={styles.backgroundImage}>
          <Image
            source={require('../../Title.png')}
            style={styles.title}>
          </Image>
          <TouchableOpacity
            style={styles.navButton}
            underlayColor="transparent"
            onPress={this._onTrailsButton.bind(this)}>
            <Text
              style={styles.navText}>
                Trail List
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            underlayColor="transparent"
            onPress={this._onMapsButton.bind(this)}>
            <Text
              style={styles.navText}>
                Overhead Map
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            underlayColor="transparent"
            onPress={this._onWeatherButton.bind(this)}>
            <Text
              style={styles.navText}>
                Live Weather
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            underlayColor="transparent"
            onPress={this._onLocalButton.bind(this)}>
            <Text
              style={styles.navText}>
                Local Attractions
            </Text>
          </TouchableOpacity>
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
      component: Map,
      name: "Map"
    })
  }

  _onWeatherButton() {
    this.props.navigator.push({
      component: Weather,
      name: "Weather"
    })
  }

  _onLocalButton(){
    this.props.navigator.push({
      component: Local,
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
    marginBottom: 20
  },
  navButton: {
    height: 70,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cccccc',
    borderRadius: 10,
    marginBottom: 5,
    opacity: 50
  },
  navText: {
    fontSize: 20,
    color: '#658D9F'
  }
});

module.exports = Main;
