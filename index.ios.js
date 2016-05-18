"use strict";

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
  View
} from 'react-native';

import fetchWeather from "./App/Api/weatherapi"
import TrailList from "./App/Components/TrailList"
import weatherIcon from "./App/Utils/icons"
import Trail from './App/Components/Trail'
import Weather from './App/Components/Weather'
import Local from './App/Components/Local'
import Map from './App/Components/Map'
import Landmark from './App/Components/Landmark'
import LandmarkList from './App/Components/LandmarkList'

var Main = require('./App/Components/Main');

class CycleTheBay extends React.Component {

  renderScene(route,navigator) {
    if (route.name == 'Main') {
      return <Main navigator={navigator} />
    }
    if (route.name == 'Trails') {
      return <TrailList navigator={navigator} />
    }
    if (route.name == 'Trail') {
      return <Trail navigator={navigator} {...route.passProps} />
    }
    if (route.name == 'Weather') {
      return <Weather navigator={navigator} />
    }
    if (route.name == 'Local') {
      return <Local navigator={navigator} />
    }
    if (route.name == 'Map') {
      return <Map navigator={navigator} />
    }
    if (route.name == 'Landmarks') {
      return <LandmarkList navigator={navigator} {...route.passProps} />
    }
    if (route.name == 'Landmark') {
      return <Landmark navigator={navigator} {...route.passProps} />
    }
  }

  render() {
    return (
      <Navigator
        style={{ flex: 1 }}
        initialRoute={{ name: 'Main' }}
        renderScene={ this.renderScene }
      />
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff'
  }
});

AppRegistry.registerComponent('CycleTheBay', () => CycleTheBay);
