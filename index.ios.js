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
  NavigatorIOS,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
  View
} from 'react-native';

import fetchWeather from "./App/Api/weatherapi"
import weatherIcon from "./App/Utils/icons"

var Main = require('./App/Components/Main');

class CycleTheBay extends Component {
  render() {
    return (
      < NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Home',
          component: Main
        }}/>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff'
  }
});

AppRegistry.registerComponent('CycleTheBay', () => CycleTheBay);
