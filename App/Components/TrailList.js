"use strict";

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  ScrollView,
  Image,
  TabBarIOS,
  AlertIOS,
  ListView,
  View,
  AppActions
} from 'react-native';

import Trail from './Trail'
import Main from './Main'

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },

  navButton: {
    flex: 1,
  },
  title: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
  },
  listView: {
    flex: 10,
    marginTop: 20
  },
  row: {
    flex: 1,
    alignItems: 'stretch',
    padding: 20
  }
});

class TrailList extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://pacific-meadow-80820.herokuapp.com/api/locations", {method: "GET"})
      .then((response) => response.json())
      .then((responseData) => {
        // AlertIOS.alert(responseData[1].title)
        this.setState({
          dataSource:this.state.dataSource.cloneWithRows(responseData),
          loaded: true,
        });
      })
      .done();
  }

  _handleTrailSelection(trail){
    fetch('http://pacific-meadow-80820.herokuapp.com/api/locations/'+trail.id)
      .then((response) => response.json())
      .then(responseData => {
        this.props.navigator.push({
          title: trail.title,
          name: 'Trail',
          passProps: {
            title: responseData.title,
            distance: responseData.distance,
            elevation_up: responseData.elevation_up,
            desc: responseData.desc
          },
        });
      }).done();
  }

  _pop() {
    this.props.navigator.pop()
  }

  render() {
    if (!this.state.loaded) {
      this.renderLoadingView();
    }

    return(
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderTrail.bind(this)}
          style={styles.listView}
        />
      </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading trails...
        </Text>
      </View>
    )
  }

  renderTrail(trail) {
    return (
      <TouchableHighlight
        style={styles.row}
        onPress={(this._handleTrailSelection.bind(this, trail))}
        underlayColor="transparent">
        <Text style={styles.title}>
          {trail.title}
        </Text>
      </TouchableHighlight>
    );
  }
}

module.exports = TrailList;
