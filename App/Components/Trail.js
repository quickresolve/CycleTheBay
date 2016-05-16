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
  AlertIOS,
  navigator,
  View
} from 'react-native';

import TrailList from './TrailList'
import Weather from './Weather'
import Local from './Local'
import Main from './Main'

const styles = StyleSheet.create({
	container: {
		flex: 1,
 		alignItems: 'stretch',
	},
	header: {
		flex: 1,
	},
	map: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center'
	},
	infoWrapper: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#658D9F'
	},
	titleWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	navButton: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#9f6565'
	},
	navText: {
		fontSize: 20,
		color: 'white'
	},
	description: {
		flex: 3,
		backgroundColor: 'white'
	},
	image: {
		width: 420,
		height: 350
	},
	labels: {
		fontSize: 20,
		color: 'white'
	},
	measurementContainer: {
		alignItems: 'center'
	},
	measurements: {
		fontSize: 12,
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

var Trail = React.createClass ({
  
	onLinkPressed() {
		console.log('pressed');
	},

	render() {
		return(
			<View style={styles.container}>

				<View style={styles.titleWrapper}>
					<Image/>
				</View>
				<View style={styles.header}>

					<View style={styles.infoWrapper}>
						<View style={styles.measurementContainer}>
							<Text style={styles.labels}>
								{this.props.elevation_up} feet
							</Text>
							<Text style={styles.measurements}>
								Elevation
							</Text>
						</View>

						<View style={styles.measurementContainer}>
							<Text style={styles.labels}>
								{this.props.distance} miles
							</Text>
							<Text style={styles.measurements}>
								Distance
							</Text>
						</View>
					</View>

					<TouchableHighlight style={styles.navButton} underlayColor="transparent" onPress={this.onLinkPressed}>
						<Text style={styles.navText}>
							Click for Navigation
						</Text>
					</TouchableHighlight>

					<View style={styles.description}>
						<Text>
							{this.props.desc}
						</Text>
					</View>

				</View>
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
	},

  _onHomeButton(){
    this.props.navigator.push({
      component: Main,
      name: "Main"
    })
  },


 _onTrailsButton(){
   this.props.navigator.push({
     component: TrailList,
     name: "Trails",
   });
 },

 _onMapsButton(){
   this.props.navigator.push({
     component: Maps,
     name: "Map"
   })
 },

 _onWeatherButton() {
   this.props.navigator.push({
     component: 'Weather',
     name: "Weather"
   })
 },

 _onLocalButton(){
   this.props.navigator.push({
     component: 'Local',
     name: "Local"
   })
 }
});

module.exports = Trail;
