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
  View
} from 'react-native';

import Trail from './Trail'

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center'
  },
  listView: {
    paddingTop: 20
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
          component: Trail,
          passProps: {trail: responseData}
        });
      }).done();
  }

  render() {
    if (!this.state.loaded) {
      this.renderLoadingView();
    }

    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderTrail.bind(this)}
        style={styles.listView}
      />
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
        style={styles.container}
        onPress={this._handleTrailSelection.bind(this, trail)}
        underlayColor="transparent">
        <Text style={styles.title}>
          {trail.title}
        </Text>
      </TouchableHighlight>
    );
  }
}

module.exports = TrailList;
