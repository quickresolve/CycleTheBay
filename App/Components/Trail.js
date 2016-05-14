import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  MapView,
  ScrollView,
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

class Trail extends Component {

	onLinkPressed() {
		console.log('pressed');
	}

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
						<View style={styles.measurementContainer}>							
							<Text style={styles.labels}>
								5 feet
							</Text>
							<Text style={styles.measurements}>
								Elevation
							</Text>
						</View>

						<View style={styles.measurementContainer}>
							<Text style={styles.labels}>
								20 miles
							</Text>
							<Text style={styles.measurements}>
								Distance
							</Text>
						</View>
					</View>

					<TouchableHighlight style={styles.navButton} underlayColor='#99d9f4' onPress={this.onLinkPressed.bind(this)}>
						<Text style={styles.navText}>
							Click for Navigation
						</Text>
					</TouchableHighlight>

					<View style={styles.description}>
						<Text>
							"Lorem ipsum dolor sit amet, detraxit inimicus ut usu, utamur ponderum ex mea, vel soleat consequuntur ad. Usu omnis quodsi ad, vix te error mundi philosophia, cu utamur deserunt aliquando eos. Homero scaevola praesent an has. No timeam nonumes qualisque vim, qui denique senserit scriptorem cu. Eu pro sonet liberavisse, mea debet dolorum ne. In regione liberavisse reprehendunt eam, in aperiri euripidis mei. Iriure appareat mea in, vidit causae hendrerit eam ne. Aperiri malorum ne ius, ipsum prodesset ex eos, sit id ipsum habemus democritum. Ea vix omittam indoctum, ut mel nibh mazim qualisque, at his possit scaevola. Ex vis electram omittantur appellantur, id sit dicta scaevola lobortis. Sea ex habemus docendi."
						</Text>
					</View>
					
				</View>
			</View>
		);
	}
}

module.exports = Trail;