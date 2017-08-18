import React, {Component} from 'react';
import { Button } from 'nachos-ui'

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class HomeScrenn extends Component {
  
  static navigatorStyle = {
    topBarBorderColor: 'red',
    topBarBorderWidth: 5.5,
  };

  constructor(props) {
    super(props);
    this.nextScreen = this.nextScreen.bind(this);
    this.nextScreen2 = this.nextScreen2.bind(this);
  }

  nextScreen() {
    this.props.navigator.push({
      screen: 'schoolphotoapp.homescreen',      
      title: 'Home Screen'
    });
  }

  nextScreen2() {
    this.props.navigator.push({
      screen: 'schoolphotoapp.homes3',      
      title: 'Home Screen'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Home 2
        </Text>
        <Button kind='squared' type='success' onPress={this.nextScreen}>
          navegar
        </Button>
        <Button kind='squared' type='success' onPress={this.nextScreen2}>
          navegar 2 
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
