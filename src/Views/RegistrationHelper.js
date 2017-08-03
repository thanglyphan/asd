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
  Alert,
  TouchableOpacity
} from 'react-native'
import RegistrationView from './RegistrationView'
import Swiper from 'react-native-swiper'
import color from '../assets/color'
import font from '../assets/font'
import {checkValidUser} from '../Networking/user'
import {styles} from './InitialChoice'

const { width, height } = Dimensions.get('window')

const background = require('./SignInUp/signup_bg.png')
const backIcon = require('./SignInUp/back.png')
const personIcon = require('./SignInUp/signup_person.png')
const lockIcon = require('./SignInUp/signup_lock.png')
const emailIcon = require('./SignInUp/signup_email.png')
const birthdayIcon = require('./SignInUp/signup_birthday.png')
const colorBtnBackground = color.primary

export default class RegistrationHelper extends React.Component {
  state: {
    name: string,
    userEmail: string,
    password: string,
  }

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      userEmail: '',
      password: ''
    }
  }

  checkUser = () => {
    switch (checkValidUser(this.state.name, this.state.userEmail, this.state.password)) {
      case 0: Alert.alert('Ugyldig', 'Vennligst tast inn gyldig navn'); break;
      case 1: Alert.alert('Ugyldig', 'Vennligst tast inn gyldig e-postadresse'); break;
      case 2: Alert.alert('Ugyldig', 'Passord må bestå av 6 eller fler tegn'); break;
      default: console.log("WOHOOOO");
    }
  }


  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.headerText}>Registrering</Text>
        <View style={styles.inputWrap}>
          <View style={styles.iconWrap}>
            <Image
              source={personIcon}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>
          <TextInput
            placeholder="Navn"
            fontFamily={font.primary}
            placeholderTextColor="#bdc3c7"
            underlineColorAndroid="transparent"
            style={styles.input}
            onChangeText={(text) => this.setState({name: text})}
          />
        </View>
        <View style={styles.inputWrap}>
          <View style={styles.iconWrap}>
            <Image
              source={emailIcon}
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
            <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
          </View>
          <TextInput
            fontFamily={font.primary}
            placeholderTextColor="#bdc3c7"
            placeholder="Passord"
            style={styles.input}
            onChangeText={(text) => this.setState({password: text})}
            underlineColorAndroid="transparent"
            secureTextEntry
          />
        </View>
        <View
          style={{
            flex: 0.3,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 8
          }}
        >
            <TouchableOpacity activeOpacity={0.3} onPress={this.checkUser}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Registrer</Text>
              </View>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}

