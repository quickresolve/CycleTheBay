var React = require('react-native');

var {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} = React;

class Main extends React.Component{
  render(){
    return(
      <View style ={styles.mainContainer}>
        <TouchableHighlight
          onPress={this._onPressButton}
          style={styles.button}
          underlayColor="white">
            <Text style={styles.title}>Cycle the Bay</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#658D9F'
  },
  title: {
    marginBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#658D9F'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText:{
    color: '#658D9F'
  }
});

module.exports = Main;
