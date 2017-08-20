import React, {Component} from 'react';
import { Button, Card } from 'nachos-ui'

import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

class HomeScrenn extends Component {

  static navigatorStyle = {
    navBarBackgroundColor: '#4C79E8',
    topBarBorderWidth: 5.5,
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, text: 'The avocado is a tree that is native to Mexico', image:'https://upx.cz/BsN' },
        { id: 2, text: 'The avocado is a tree that is native to Mexico', image:'https://upx.cz/BsN' },
        { id: 3, text: 'The avocado is a tree that is native to Mexico', image:'https://upx.cz/BsN' },
        { id: 4, text: 'The avocado is a tree that is native to Mexico', image:'https://upx.cz/BsN' },
      ]
    };
    this.nextScreen = this.nextScreen.bind(this);
    this._renderItem = this._renderItem.bind(this);
  }

  nextScreen() {
    this.props.navigator.push({
      screen: 'login',
    });
  }
  _keyExtractor = (item, index) => item.id;

  _itemSeparator() {
    return (
      <View style={{ height: 10, backgroundColor: 'yellow'}} />
    );
  }

  _renderItem({item}) {
      return (
        <Card
          footerContent={item.text}
          image={item.image}
          style={{
            margin: 8,
            elevation: 2,
            shadowColor: '#0000001E',
            shadowOpacity: 0.26,
            shadowOffset: { height: 1, width: 0 },
            shadowRadius: 1,
            }}
        />
      )
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        />
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
  cardStyle: {
    margin: 15,
    width: 280
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
