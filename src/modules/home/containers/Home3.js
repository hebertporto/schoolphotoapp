import React, {Component} from 'react';
import { Button } from 'nachos-ui'

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class HomeScrenn extends Component {
  
  static navigatorStyle = {
    navBarHidden: true,
  };

  constructor(props) {
    super(props);
    this.nextScreen = this.nextScreen.bind(this);
  }

  nextScreen() {
    this.props.navigator.push({
      screen: 'schoolphotoapp.homescreen',      
      title: 'Home Screen'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Home 3
        </Text>
        <Button kind='squared' type='success' onPress={this.nextScreen}>
          Home Screen
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default HomeScrenn;
