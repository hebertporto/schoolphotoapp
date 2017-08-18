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

const screen = [
  {
    title: 'Home Screen',
    screen: 'schoolphotoapp.homescreen',
  }
]

export const tabBasedAppParams = {
  screen,
  animationType: 'fade',
  appStyle: theme
}

export function startApp () {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'schoolphotoapp.homescreen',
      title: 'Navigation Bootstrap'
    }
  });
}
