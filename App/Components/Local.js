import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  MapView,
  ScrollView,
  TabBarIOS,
  View
} from 'react-native';


class Local extends Component {
  render() {
    return(
      <View style={styles.container}>
        <MapView style={styles.map}>

        </MapView>
      </View>
    )
  }
};

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
  }
});





module.exports = Local;
