/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Dimensions,
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const FirstApp = React.createClass({
  getInitialState() {
    return {
      // You may want to put stuff here.
    }
  },

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Up next...
        </Text>
        <Text style={styles.instructions}>
          Build an app to launch Spacex rockets.
        </Text>
        <Text style={styles.instructions}>
          It should include some type of launch safeguard{'\n'}
          to enable and disable a main Launch button.
        </Text>
        <Text style={styles.instructions}>
          For the purposes of this example, don't actually{'\n'}
          launch a rocket. Instead you can just show a picture{'\n'}
          of a rocket launch instead. You can find one at{'\n'}
          ./resources/images/spacex-launch.jpg
        </Text>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    marginTop: 10,
    textAlign: 'center',
  }
});

AppRegistry.registerComponent('FirstApp', () => FirstApp);
