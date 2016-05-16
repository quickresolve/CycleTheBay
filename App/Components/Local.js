import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  MapView,
  ScrollView,
  TabBarIOS,
  TouchableOpacity,
  View
} from 'react-native';


var Local = React.createClass ({
  // watchID: (null: ?number),

  getInitialState: function() {
    return {
      // initialPosition: 'unknown',
      // lastPosition: 'unknown',
      pin: {
        latitude: 37,
        longitude: -122
      },
      // isFirstLoad: true,
      // mapRegion: undefined,
      // mapRegionInput: undefined,
      region: {
        latitude: 37,
        longitude: -122,
        latitudeDelta: 2,
        longitudeDelta: 2
      }
    };
  },

  componentDidMount: function() {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     var initialPosition = JSON.stringify(position);
    //     this.setState({initialPosition});
    //   },
    //   (error) => alert(error.message),
    //   {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    // );
    // this.watchID = navigator.geolocation.watchPosition((position) => {
    //   var lastPosition = JSON.stringify(position);
    //   this.setState({lastPosition});
    // });
    // this.setState({
    //   pin: {
    //     longitude: this.state.region.latitude,
    //     latitude: this.state.region.longitude
    //   }
    // });
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
      </View>
    )
  }

  // _getAnnotations(region) {
  //   return [{
  //     longitude: region.longitude,
  //     latitude: region.latitude
  //   }]
  // },
  //
  // _onRegionChange(region) {
  //   this.setState({
  //     mapRegionInput: region
  //   });
  // },
  //
  // _onRegionChangeComplete(region) {
  //   if (this.state.isFirstLoad) {
  //     this.setState({
  //       mapRegionInput: region,
  //       annotations: this._getAnnotations(region),
  //       isFirstLoad: false,
  //     });
  //   }
  // },
  //
  // _onRegionInputChanged(region) {
  //   this.setState({
  //     mapRegion: region,
  //     mapRegionInput: region,
  //     annotations: this._getAnnotations(region)
  //   });
  // }

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
  }
});





module.exports = Local;
