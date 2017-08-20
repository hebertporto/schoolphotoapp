import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground
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
        <ImageBackground
          style={styles.imageContainer}
          source={require('./../../../assets/images/bck-app.jpg')}
        >
          <View style={styles.firstSection}>
            <Text style={styles.welcome}>
             My Travel Journey
            </Text>
          </View>
          <View style={styles.secondSection}>
            <Input
              style={inputStyle}
              placeholder='Your name'
              value={this.state.value}
              onChangeText={value => this.setState({ value })}
            />
            <Input
              style={inputStyle}
              placeholder='Your name'
              value={this.state.value}
              onChangeText={value => this.setState({ value })}
            />
            <Button type='success' onPress={this.nextScreen}>
              LOGIN
            </Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstSection: {
    flex: 2,
    justifyContent: 'center',

  },
  secondSection: {
    flex: 1,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  btnStyle: { margin: 15 },
  container: {
    flex: 1,
  },
  welcome: {
    height: 30,
    fontSize: 20,
    color: '#FFFFFF',
  },
});

export default HomeScrenn;
