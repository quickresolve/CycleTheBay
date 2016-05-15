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

import getSpecificTrail from '../Api/railsapi'

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
	}
});

var Trail = React.createClass ({

	getInitialState: function() {
		return {
			id: 0,
      title: '',
      description: '',
      image_url: '',
      start_lat: 0,
      start_long: 0,
      end_lat: 0,
      end_long: 0,
      distance: 0,
      elevation_up: 0,
      elevation_down: 0,
      terrain: ''
		};
	},

	getTrail: function() {
		getSpecificTrail(this.state.id)
			.then((data) => {
				console.log(data)
				this.setState(data);
			});
	},

	onLinkPressed() {
		console.log('pressed');
	},

	render() {
		return(
			<View style={styles.container}>

				<View style={styles.titleWrapper}>
					<Image
						source={this.state.map_url}
						style={styles.image} />
				</View>
				<View style={styles.header}>

					<View style={styles.infoWrapper}>
						<View style={styles.measurementContainer}>
							<Text style={styles.labels}>
								{this.state.elevation_up} feet
							</Text>
							<Text style={styles.measurements}>
								Elevation
							</Text>
						</View>

						<View style={styles.measurementContainer}>
							<Text style={styles.labels}>
								{this.state.distance}
							</Text>
							<Text style={styles.measurements}>
								Distance
							</Text>
						</View>
					</View>

					<TouchableHighlight style={styles.navButton} underlayColor='#99d9f4' onPress={this.onLinkPressed}>
						<Text style={styles.navText}>
							Click for Navigation
						</Text>
					</TouchableHighlight>

					<View style={styles.description}>
						<Text>
							{this.state.description}
						</Text>
					</View>

				</View>
			</View>
		);
	}
});

module.exports = Trail;
