/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
