//@flow
import React from 'react'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { AppRegistry, NavigatorIOS } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import RecipeView from './ViewsInside/RecipeView'
import ListedView from './ViewsInside/ListedView'
import TestTwo from './ViewsInside/TestTwo'
import TestThree from './ViewsInside/TestThree'
import TestFour from './ViewsInside/TestFour'
import color from '../assets/color'

const MainDetails = StackNavigator({
  Main: { screen: ListedView },
  Details: { screen: RecipeView }
})

const MyBottomTab = TabNavigator(
  {
    One: { screen: MainDetails },
    Two: { screen: TestTwo },
    Three: { screen: TestThree },
    Four: { screen: TestFour }
  },
  {
    swipeEnabled: false,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style:{height: 45},
      showLabel: false,
      activeTintColor: color.primary,
      inactiveTintColor: color.tabBottomTabUnSelected,
      inactiveBackgroundColor: '#FFF',
      activeBackgroundColor: '#FFF'
    }
  }
)

export default class MainView extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyBottomTab />
      </View>
    )
  }
}
