//@flow
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native'
import RegistrationView from './RegistrationView'
import RegistrationHelper from './RegistrationHelper'
import Swiper from 'react-native-swiper'
import color from '../assets/color'
import Icon from 'react-native-vector-icons/FontAwesome'
import font from '../assets/font'
import MainView from './MainView'

const { width, height } = Dimensions.get('window')

const background = require('./SignInUp/login1_bg.png')
const lockIcon = require('./SignInUp/login1_lock.png')
const personIcon = require('./SignInUp/login1_person.png')
const colorBtnBackground = color.primary
export default class InitialChoice extends Component {
  state: {
    userEmail: string,
    password: string,
    loggedInUser: boolean
  }

  constructor(props) {
    super(props)
    this.state = {
      userEmail: '',
      password: '',
      loggedInUser: false
    }
  }

  checkUser = () => {
    if(this.state.userEmail === '1' && this.state.password === '1') {
      this.setState({loggedInUser: true})
    }
  }
  render() {
    if(this.state.loggedInUser) {
      return <MainView />
    }
    return (
      <View style={styles.container}>
        <Image source={background} style={styles.background} resizeMode="cover">
          <View style={{ flex: 0.5 }}>
            <Image
              source={require('../Splash/images/logo.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.swiperContainer}>
            <Swiper
              height={300}
              dotColor="#2c3e50"
              activeDotColor={color.title}
            >
              <View style={styles.wrapper}>
                <Text style={styles.headerText}>Logg inn</Text>
                <View style={styles.inputWrap}>
                  <View style={styles.iconWrap}>
                    <Image
                      source={personIcon}
                      style={styles.icon}
                      resizeMode="contain"
                    />
                  </View>
                  <TextInput
                    placeholder="E-post"
                    fontFamily={font.primary}
                    placeholderTextColor="#bdc3c7"
                    underlineColorAndroid="transparent"
                    style={styles.input}
                    onChangeText={(text) => this.setState({userEmail: text})}
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
                    placeholder="Passord"
                    fontFamily={font.primary}
                    style={styles.input}
                    onChangeText={(text) => this.setState({password: text})}
                    underlineColorAndroid="transparent"
                    secureTextEntry
                  />
                </View>
                <TouchableOpacity activeOpacity={0.4} >
                  <View>
                    <Text style={styles.forgotPasswordText}>
                      Glemt passord?
                    </Text>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    flex: 0.3,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <TouchableOpacity activeOpacity={0.3} onPress={this.checkUser}>
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>Logg inn</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <RegistrationHelper />
            </Swiper>
          </View>
          <View style={styles.footer}>
              <TouchableOpacity activeOpacity={0.2}>
                <View style={styles.footerButton}>
                  <Text style={styles.buttonText}>Logg inn som business</Text>
                </View>
              </TouchableOpacity>
            </View>
        </Image>
      </View>
    )
  }
}
export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    width,
    height
  },
  image: {
    marginTop: 30,
    alignSelf: 'center',
    width: 120,
    height: 120
  },
  swiperContainer: {
    flex: 1,
    marginTop: 20,
    width,
    alignSelf: 'center'
  },
  wrapper: {
    flex: 1,
    paddingVertical: 10
  },
  inputWrap: {
    flexDirection: 'row',
    marginVertical: 5,
    height: 35,
    width: 230,
    backgroundColor: 'rgba(0,0,0,.35)',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  iconWrap: {
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    height: 20,
    width: 20
  },
  input: {
    flex: 1,
    color: '#FFF',
    paddingHorizontal: 5,
    fontSize: 14
  },
  button: {
    borderColor: '#CCC',
    backgroundColor: colorBtnBackground,
    borderWidth: 1,
    width: 130,
    height: 35,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  buttonText: {
    backgroundColor: 'transparent',
    color: '#FFF',
    textAlign: 'center',
    fontFamily: font.primary,
    fontSize: 14
  },
  headerText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 30,
    fontFamily: font.title
  },
  forgotPasswordText: {
    color: '#FFF',
    marginTop: 15,
    fontFamily: font.primary,
    backgroundColor: 'transparent',
    textAlign: 'center'
  },
  signupWrap: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  accountText: {
    color: '#FFF'
  },
  signupLinkText: {
    color: '#FFF',
    marginLeft: 5
  },
  footer: {
    flex: 0.2,
    marginTop: 3
  },
  footerButton: {
    borderColor: '#CCC',
    borderWidth: 1,
    width: 200,
    height: 35,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: colorBtnBackground,
  }
})
