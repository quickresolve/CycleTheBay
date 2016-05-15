import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  MapView,
  ScrollView,
  Image,
  TabBarIOS,
  View
} from 'react-native';

var Trail = require('./Trail')
var Weather = require('./Weather')

class Tabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'trail'
    };
  }

	render() {
		return(
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'trail'}
          systemIcon='featured'
          onPress={() => {
            this.setState({
              selectedTab: 'trail'
            });
          }}>
          <Trail />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'weather'}
          systemIcon='contacts'
          onPress={() => {
            this.setState({
              selectedTab: 'weather'
            });
          }}>
          <Weather />
        </TabBarIOS.Item>
      </TabBarIOS>
		);
	}
}

module.exports = Tabs;

