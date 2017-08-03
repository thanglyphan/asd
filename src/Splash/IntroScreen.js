//@flow
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableHighlight
} from 'react-native'
import MainView from '../Views/MainView'
import LoginView from '../Views/LoginView'
import InitialChoice from '../Views/InitialChoice'
import AppIntro from 'react-native-app-intro'
import Swiper from 'react-native-swiper'
import color from '../assets/color'
import font from '../assets/font'

export default class IntroScreen extends Component {

  state: {
    showMain: boolean
  }

  constructor() {
    super()
    this.state = { showMain: true } //False here when done LoginView
  }

  doneBtnHandle = () => {
    this.setState({ showMain: true })
  }

  getStarted = () => {
    this.doneBtnHandle()
  }

  render() {
    if (this.state.showMain) {
       //return <InitialChoice />
       return <MainView />
      //return <LoginView />
    } else {
      return (
        <View style={styles.wrapper}>
          <View style={{ flex: 0.5 }}>
            <Image source={require('./images/logo.png')} style={styles.image} />
          </View>
          <View style={{ flex: 0.2 }}>
            <Text style={styles.title}>
              {textHash.titleOne}
            </Text>
          </View>
          <Swiper
            height={200}
            dotColor="#2c3e50"
            activeDotColor={color.title}
          >
            <View>
              <Text style={styles.subtitle}>
                {textHash.subtitleTwo}
              </Text>
            </View>
            <View>
              <Text style={styles.subtitle}>
                {textHash.subtitleTwo}
              </Text>
            </View>
            <View>
              <View>
                <Text style={styles.subtitle}>
                  {textHash.subtitleThree}
                </Text>
              </View>
              <TouchableHighlight onPress={() => this.getStarted()}>
                <Text style={styles.button}>Get started!</Text>
              </TouchableHighlight>
            </View>
          </Swiper>
        </View>
      )
    }
  }
}
const textHash = {
  titleOne: 'Thangs app',
  subtitleOne: 'Sub en',
  subtitleTwo:'Sub to',
  subtitleThree: 'Sub tre'
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: color.primary
  },
  title: {
    fontSize: 50,
    alignSelf: 'center',
    fontWeight: 'normal',
    color: color.title,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: font.title
  },
  subtitle: {
    marginLeft: 15,
    marginRight: 15,
    fontSize: 18,
    fontWeight: 'normal',
    textAlign: 'center',
    color: color.subtitle,
    fontFamily: font.primary
  },
  image: {
    marginTop: 15,
    marginBottom: 15,
    width: 200,
    height: 200
  },
  button: {
    fontSize: 20,
    marginTop: 100,
    fontWeight: 'normal',
    textAlign: 'center',
    color: color.subtitle,
    fontFamily: font.primary
  }
})
