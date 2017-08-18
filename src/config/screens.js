import { Navigation } from 'react-native-navigation'

import HomeScreen from '../modules/home/containers/HomeScreen'
import Home2 from '../modules/home/containers/Home2'
import Home3 from '../modules/home/containers/Home3'

export function registerScreens () {
  Navigation.registerComponent('schoolphotoapp.homescreen', () => HomeScreen)
  Navigation.registerComponent('schoolphotoapp.homes2', () => Home2)
  Navigation.registerComponent('schoolphotoapp.homes3', () => Home3)
}
