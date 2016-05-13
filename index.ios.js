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

import fetchWeather from "./app/api/api"
import weatherIcon from "./app/utils/icons"

var Main = require('./App/Components/Main');

class CycleTheBay extends Component {
  render() {
    return (
      < NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Cycle The Bay',
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
