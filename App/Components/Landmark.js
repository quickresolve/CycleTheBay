"use strict";

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TabBarIOS,
  AlertIOS,
  ListView,
  View,
  AppActions,
  navigator
} from 'react-native';

import LandmarkList from './LandmarkList'
import TrailList from './TrailList'
import Weather from './Weather'
import Local from './Local'
import Main from './Main'


class Landmark extends Component{
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image
            source={{uri: this.props.img_url}}
            style={{height: 300, width: 400}} />
        </View>
        <View style={styles.infoWrapper}>
          <Text style={styles.title}>
            {this.props.title}
          </Text>
        </View>
        <ScrollView>
          
        </ScrollView>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
