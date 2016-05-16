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
  AppActions,
  navigator
} from 'react-native';

import Trail from './Trail'
import Main from './Main'
import Weather from './Weather'
import Local from './Local'


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
    fontSize: 16,
    color: 'white',
    justifyContent: 'center',
  },
  listView: {
    flex: 10,
    marginTop: 20
  },
  row: {
    flex: 1,
    alignItems: 'stretch',
    margin: 20,
    backgroundColor: 'blue'
  },
  button: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText:{
    color: '#658D9F',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerNav: {
    flex: 0,
    flexDirection: 'row',
    borderTopWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    paddingTop: 10
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
        <View style={styles.footerNav}>
          <TouchableHighlight
            onPress={this._onHomeButton.bind(this)}
            style={styles.button}
            underlayColor="gray">
              <Text style={styles.buttonText}>Home</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this._onMapsButton.bind(this)}
            style={styles.button}
            underlayColor="gray">
              <Text style={styles.buttonText}>Maps</Text>
          </TouchableHighlight>
          <TouchableHighlight
          onPress={this._onTrailsButton.bind(this)}
          style={styles.button}
          underlayColor="gray">
            <Text style={styles.buttonText}>Trails</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this._onWeatherButton.bind(this)}
            style={styles.button}
            underlayColor="gray">
              <Text style={styles.buttonText}>Weather</Text>
          </TouchableHighlight>
          <TouchableHighlight
          onPress={this._onLocalButton.bind(this)}
          style={styles.button}
          underlayColor="gray">
            <Text style={styles.buttonText}>Local</Text>
          </TouchableHighlight>
        </View>
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

  _onHomeButton(){
    this.props.navigator.push({
      component: Main,
      name: "Main"
    })
  }

  _onTrailsButton(){
    this.props.navigator.push({
      component: TrailList,
      name: "Trails",
    });
  }

  _onMapsButton(){
    this.props.navigator.push({
      component: Maps,
      name: "Map"
    })
  }

  _onWeatherButton() {
    this.props.navigator.push({
      component: 'Weather',
      name: "Weather"
    })
  }

  _onLocalButton(){
    this.props.navigator.push({
      component: 'Local',
      name: "Local"
    })
  }
}

module.exports = TrailList;
