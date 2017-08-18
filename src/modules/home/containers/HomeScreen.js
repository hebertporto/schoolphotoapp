import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button } from 'nachos-ui'

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
      screen: 'schoolphotoapp.homes2',
      title: 'Pushed Screen'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Configurado Boladão
        </Text>
        <Button kind='squared' type='success' onPress={this.nextScreen}>
          navegar
        </Button>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Press RR to reload,{'\n'}
          Cmd+M for dev menu
        </Text>
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
