import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
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
      screen: 'home',
      title: 'My Travels',
      backButtonHidden: true,
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
            <Image source={require('./../../../assets/images/logo.png')} />
          </View>
          <View style={styles.secondSection}>
            <Button type='primary' onPress={this.nextScreen}>
              LOGIN WITH FACEBOOK
            </Button>
          </View>
          <View style={styles.thirdSection}>
              <Text> Bla Bla </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoText: {
    fontWeight: "800",
    color: 'white',
    fontSize: 40,
  },
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
    flex: 0.7,
    justifyContent: 'center',

  },
  secondSection: {
    flex: 0.25,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  thirdSection: {
    flex: 0.05,
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
