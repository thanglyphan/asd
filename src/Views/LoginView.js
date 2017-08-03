//@flow
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native'
import RegistrationView from './RegistrationView'

const { width, height } = Dimensions.get('window')
const background = require('./SignInUp/login1_bg.png')
const mark = require('./SignInUp/login1_mark.png')
const lockIcon = require('./SignInUp/login1_lock.png')
const personIcon = require('./SignInUp/login1_person.png')

export default class LoginView extends Component {
  state: {
    showRegistration: boolean
  }

  constructor() {
    super()
    this.state = { showRegistration: false }
  }

  goToRegistration = () => {
    this.setState({ showRegistration: true })
  }

  render() {
    if (this.state.showRegistration) {
      return <RegistrationView />
    } else {
      return (
        <View style={styles.container}>
          <Image
            source={background}
            style={styles.background}
            resizeMode="cover"
          >
            <View style={styles.markWrap}>
              <Image source={mark} style={styles.mark} resizeMode="contain" />
            </View>
            <View style={styles.wrapper}>
              <View style={styles.inputWrap}>
                <View style={styles.iconWrap}>
                  <Image
                    source={personIcon}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                </View>
                <TextInput
                  placeholder="Username"
                  placeholderTextColor="#bdc3c7"
                  underlineColorAndroid="transparent"
                  style={styles.input}
                />
              </View>
              <View style={styles.inputWrap}>
                <View style={styles.iconWrap}>
                  <Image
                    source={lockIcon}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                </View>
                <TextInput
                  placeholderTextColor="#bdc3c7"
                  placeholder="Password"
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  secureTextEntry
                />
              </View>
              <TouchableOpacity activeOpacity={0.5}>
                <View>
                  <Text style={styles.forgotPasswordText}>
                    Forgot Password?
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Sign In</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <View style={styles.signupWrap}>
                <Text style={styles.accountText}>Dont have an account?</Text>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => this.goToRegistration()}
                >
                  <View>
                    <Text style={styles.signupLinkText}>Sign Up</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Image>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  markWrap: {
    flex: 1,
    paddingVertical: 30
  },
  mark: {
    width: null,
    height: null,
    flex: 1
  },
  background: {
    width,
    height
  },
  wrapper: {
    paddingVertical: 30
  },
  inputWrap: {
    flexDirection: 'row',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC'
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {},
  input: {
    flex: 1,
    color: '#FFF',
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: '#FF3366',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18
  },
  forgotPasswordText: {
    color: '#D8D8D8',
    backgroundColor: 'transparent',
    textAlign: 'right',
    paddingRight: 15
  },
  signupWrap: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  accountText: {
    color: '#D8D8D8'
  },
  signupLinkText: {
    color: '#FFF',
    marginLeft: 5
  }
})
