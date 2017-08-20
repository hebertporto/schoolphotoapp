import { Navigation } from 'react-native-navigation'

import LoginScreen from '../modules/login/containers/LoginScreen'
import HomeScreen from '../modules/home/containers/HomeScreen'

export function registerScreens () {
  Navigation.registerComponent('login', () => LoginScreen)
  Navigation.registerComponent('home', () => HomeScreen)
}
