import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  MapView,
  Image,
  View
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
 		alignItems: 'stretch',
	},
	header: {
		flex: 1,
		backgroundColor: 'red'
	},
	map: {
		flex: 2,
		backgroundColor: 'blue',
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
		backgroundColor: 'blue',
		justifyContent: 'center',
		alignItems: 'center'
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
	measurements: {
		fontSize: 12,
	}
});

class Trail extends Component {
	render() {
		return(
			<View style={styles.container}>
				
				<View style={styles.titleWrapper}>
					<Image
						source={require('../../bayTrail.png')}
						style={styles.image} />
				</View>
				<View style={styles.header}>

					<View style={styles.infoWrapper}>
						<View style={{alignItems: 'center'}}>							
							<Text style={styles.labels}>
								5 feet
							</Text>
							<Text style={styles.measurements}>
								Elevation
							</Text>
						</View>

						<View style={{alignItems: 'center'}}>
							<Text style={styles.labels}>
								20 miles
							</Text>
							<Text style={styles.measurements}>
								Distance
							</Text>
						</View>
					</View>

					<View style={styles.navButton}>
						<Text>
							View Directions
						</Text>
					</View>

					<View style={styles.description}>
						<Text>
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
						</Text>
					</View>
					
				</View>
			</View>
		);
	}
}

module.exports = Trail;