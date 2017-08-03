import React from 'react'
import { View, Text, AppRegistry } from 'react-native'
import IntroScreen from './src/Splash/IntroScreen'
import { StackNavigator } from 'react-navigation';
import ListedView from './src/Views/ViewsInside/ListedView'

export default class App extends React.Component {
  render() {
    return <IntroScreen />
  }
}


/*
const App = StackNavigator({
  Intro: { screen: IntroScreen },
  Home: { screen: ListedView }
}, {headerMode: 'screen'} );
*/
AppRegistry.registerComponent('ThangsApp', () => App);