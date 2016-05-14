import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
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
		alignItems: 'center'
	},
	titleWrapper : {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'yellow'
	}
});

class Trail extends Component {
	render() {
		return(
			<View style={styles.container}>
				<View style={styles.header}>

					<View style={styles.titleWrapper}>
						<Text>
							Trail Name
						</Text>
					</View>
					
					<View style={styles.infoWrapper}>
						<Text>
							Elevation
						</Text>
						<Text>
							Distance
						</Text>
					</View>
				
				</View>

				<View style={styles.map}>
					<Text>Map</Text>
				</View>
			</View>
		);
	}
}

module.exports = Trail;