//@flow
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native'
import LoginView from './LoginView'

const background = require('./SignInUp/signup_bg.png')
const backIcon = require('./SignInUp/back.png')
const personIcon = require('./SignInUp/signup_person.png')
const lockIcon = require('./SignInUp/signup_lock.png')
const emailIcon = require('./SignInUp/signup_email.png')
const birthdayIcon = require('./SignInUp/signup_birthday.png')

export default class RegistrationView extends Component {
  state: {
    goBack: boolean,
    hasJoined: boolean
  }

  constructor() {
    super()
    this.state = {
      goBack: false,
      hasJoined: false
    }
  }

  goBackHandler = () => {
    this.setState({ goBack: true })
  }

  hasJoinedHandler = () => {
    this.setState({ hasJoined: true })
  }

  render() {
    if (this.state.goBack) {
      return <LoginView />
    } else if (this.state.hasJoined) {
      return <LoginView />
    } else {
      return (
        <View style={styles.container}>
          <Image
            source={background}
            style={[styles.container, styles.bg]}
            resizeMode="cover"
          >
            <View style={styles.headerContainer}>
              <View style={styles.headerIconView}>
                <TouchableOpacity
                  style={styles.headerBackButtonView}
                  onPress={() => this.goBackHandler()}
                >
                  <Image
                    source={backIcon}
                    style={styles.backButtonIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.headerTitleView}>
                <Text style={styles.titleViewText}>Sign Up</Text>
              </View>
            </View>

            <View style={styles.inputsContainer}>
              <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                  <Image
                    source={personIcon}
                    style={styles.inputIcon}
                    resizeMode="contain"
                  />
                </View>
                <TextInput
                  style={[styles.input, styles.whiteFont]}
                  underlineColorAndroid="transparent"
                  placeholder="Name"
                  placeholderTextColor="#FFF"
                  underlineColorAndroid="transparent"
                />
              </View>

              <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                  <Image
                    source={emailIcon}
                    style={styles.inputIcon}
                    resizeMode="contain"
                  />
                </View>
                <TextInput
                  style={[styles.input, styles.whiteFont]}
                  underlineColorAndroid="transparent"
                  placeholder="Email"
                  placeholderTextColor="#FFF"
                />
              </View>

              <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                  <Image
                    source={lockIcon}
                    style={styles.inputIcon}
                    resizeMode="contain"
                  />
                </View>
                <TextInput
                  secureTextEntry={true}
                  style={[styles.input, styles.whiteFont]}
                  underlineColorAndroid="transparent"
                  placeholder="Password"
                  placeholderTextColor="#FFF"
                />
              </View>
            </View>
            <View style={styles.footerContainer}>
              <TouchableOpacity onPress={() => this.hasJoinedHandler()}>
                <View style={styles.signup}>
                  <Text style={styles.whiteFont}>Join</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.goBackHandler()}>
                <View style={styles.signin}>
                  <Text style={styles.greyFont}>
                    Already have an account?<Text style={styles.whiteFont}>
                      {' '}Sign In
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </Image>
        </View>
      )
    }
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bg: {
    paddingTop: 30,
    width: null,
    height: null
  },
  headerContainer: {
    flex: 1
  },
  inputsContainer: {
    flex: 3,
    marginTop: 50
  },
  footerContainer: {
    flex: 2
  },
  headerIconView: {
    marginLeft: 10,
    backgroundColor: 'transparent'
  },
  headerBackButtonView: {
    width: 25,
    height: 25
  },
  backButtonIcon: {
    width: 25,
    height: 25
  },
  headerTitleView: {
    backgroundColor: 'transparent',
    marginTop: 20,
    marginLeft: 20
  },
  titleViewText: {
    fontSize: 40,
    color: '#fff'
  },
  inputs: {
    paddingVertical: 20
  },
  inputContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent',
    flexDirection: 'row',
    height: 60
  },
  iconContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputIcon: {
    width: 25,
    height: 25
  },
  input: {
    flex: 1,
    fontSize: 15
  },
  signup: {
    backgroundColor: '#FF3366',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
  },
  signin: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
    color: '#FFF'
  }
})
