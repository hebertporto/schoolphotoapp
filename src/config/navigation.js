import { Navigation } from 'react-native-navigation'

const theme = {
  tabBarBackgroundColor: 'white',
  navBarButtonColor: 'white',
  tabBarButtonColor: 'white',
  navBarTextColor: 'white',
  tabBarSelectedButtonColor: 'red',
  navigationBarColor: 'black',
  navBarBackgroundColor: 'white',
  statusBarColor: 'orange',
  tabFontFamily: 14
}

const initialScreen = {
  screen: {
    screen: 'login'
  }
}

export function startApp () {
  Navigation.startSingleScreenApp(initialScreen);
}
