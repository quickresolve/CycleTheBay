"use strict";

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  MapView,
  ScrollView,
  Image,
  TabBarIOS,
  AlertIOS,
  navigator,
  LinkingIOS,
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
    backgroundColor: '#a1a5aa'
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
		flex: 0.25,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#4d94ff'
	},
	imageWrapper: {
		flex: 0.70,
		justifyContent: 'center',
		alignItems: 'center',
	},
  coverPhoto: {
    flex: 1,
    alignItems: 'stretch'
  },
	navButton: {
		flex: 0.25,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	},
	navText: {
		fontSize: 20,
		color: '#658D9F'
	},
	description: {
		flex: 3,
    padding: 15
	},
  titleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  descriptionText: {
    color: 'white',
    fontSize: 16
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
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginBottom: 15
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
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    paddingTop: 20,
    backgroundColor: '#d9d9d9',
    paddingLeft: 20,
    paddingRight: 20
  }
});

class Trail extends Component{

	render() {
		return(
			<View style={styles.container}>

				<View style={styles.imageWrapper}>
          <Image
            source={{uri: this.props.map_url}}
            style={{height: 300, width: 400}} />
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

					<TouchableOpacity style={styles.navButton} underlayColor="transparent" onPress={() => LinkingIOS.openURL(this.props.gmaps)}>
						<Text style={styles.navText}>
							Click for Navigation
						</Text>
					</TouchableOpacity>

          <ScrollView>
					<View style={styles.description}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>
                {this.props.title}
              </Text>
            </View>
						<Text style={styles.descriptionText}>
							{this.props.desc}
						</Text>
					</View>
          </ScrollView>

				</View>
        <View style={styles.footerNav}>
          <TouchableOpacity
            onPress={this._onHomeButton.bind(this)}
            style={styles.button}
            underlayColor="gray">
              <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onMapsButton.bind(this)}
            style={styles.button}
            underlayColor="gray">
              <Text style={styles.buttonText}>Maps</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={this._onTrailsButton.bind(this)}
          style={styles.button}
          underlayColor="gray">
            <Text style={styles.buttonText}>Trails</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onWeatherButton.bind(this)}
            style={styles.button}
            underlayColor="gray">
              <Text style={styles.buttonText}>Weather</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={this._onLocalButton.bind(this)}
          style={styles.button}
          underlayColor="gray">
            <Text style={styles.buttonText}>Local</Text>
          </TouchableOpacity>
        </View>
			</View>
		);
	}

  _onHomeButton(){
    this.props.navigator.popToTop()
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

module.exports = Trail;
