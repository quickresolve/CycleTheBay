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
  View
} from 'react-native';

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

  componentDidMount(){
    fetch("http://pacific-meadow-80820.herokuapp.com/api/locations/1", {method: "GET"})
    .then((response) => response.json())
    .then((responseData) => {
      AlertIOS.alert(responseData.desc)
      this.setState(responseData)
    })
    .done();
  },

	getInitialState: function() {
		return {
			id: 0,
      title: '',
      desc: '',
      // image_url: '',
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
								{this.state.elevation_up} feet
							</Text>
							<Text style={styles.measurements}>
								Elevation
							</Text>
						</View>

						<View style={styles.measurementContainer}>
							<Text style={styles.labels}>
								{this.state.distance} miles
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
