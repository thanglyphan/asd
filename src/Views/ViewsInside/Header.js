//@flow
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  LayoutAnimation,
  ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import color from '../../assets/color'
import font from '../../assets/font'
import {styles} from './styles/HeaderStyles'
import Modal from 'react-native-modalbox'
import PopupDialog, { 
  DialogTitle,
  DialogButton,
  SlideAnimation
} from 'react-native-popup-dialog';
import { RadioButtons } from 'react-native-radio-buttons';

const slideAnimation = new SlideAnimation({ slideFrom: 'bottom' });
const icon = (
  <Icon size={24} name="meetup" color={color.tabBottomTabUnSelected} />
)
const searchSwitch = {
  searching: 'Avbryt',
  idle: ''
}
const categoryList = ['Alle', 'Frokost', 'Lunsj', 'Middag', 'Kvelds', 'Mellom måltid', 'Annet']

export default class Header extends React.Component {
  props: {
    handlePressAdd: () => void
  }
  static navigationOptions = {
    tabBarLabel: 'One',
    tabBarIcon: () => icon
  }
  constructor(){
    super()
    this.state = {
      isSearching: false,
      searchFieldValue: '',
      btnText: '',
      selectedOption: 'Alle'
    }
  }
  textChanged = (text) => {
    this.setState({isSearching: true, searchFieldValue: text, btnText: searchSwitch.searching})
  }
  searchEnded = () => {
    Keyboard.dismiss()
    this.setState({isSearching: false, searchFieldValue: '', btnText: searchSwitch.idle})
  }
  submitSearch = (text) => {
    console.log(text)
  }
  
  handlePress = () => {
    // this.slideAnimationDialog.show()
    Alert.alert('yo')
  }
  
  renderButtons() {
    var list = []
    for(var i = 0; i < categoryList.length; i++) {
      list.push(<BarBtn key={i} text={categoryList[i]}/>)
    }
    return list
  }
 
  render() {
    function setSelectedOption(selectedOption){
      this.setState({
        selectedOption: selectedOption
      });
    };

    function renderOption(option, selected, onSelect, index){
      var style = {}
      if(selected) {
        style = {
          color: '#FFF',
          paddingHorizontal: 20,
          marginBottom: 10,
          fontWeight: '400',
          fontSize: 14,
          fontFamily: font.primary
        }
      } else {
        style = {
          color: 'rgba(0,0,0,.5)',
          paddingHorizontal: 20,
          marginBottom: 10,
          fontWeight: '400',
          fontSize: 14,
          fontFamily: font.primary
        }
      }
      return (
        <TouchableWithoutFeedback onPress={onSelect} key={index}>
          <View><Text style={style}>{option}</Text></View>
        </TouchableWithoutFeedback>
      );
    }
    function renderContainer(optionNodes){
      return <View style={styles.btnBar}>{optionNodes}</View>;
    }
    return (
        <View style={styles.headerWrap}>
          <View style={styles.imageWrap}>
            <IconGet icon="plus" size={20} color="#FFF" handlePress={this.props.handlePressAdd}/>
            <Image
                source={require('../../Splash/images/logo.png')}
                style={styles.image}
              />
            <IconGet icon="cog" size={20} color="#FFF" />
          </View>
          <View style={styles.footer}>
            <View style={styles.footerSpace}>
            </View>
            <View style={styles.searchWrap}>
              <View style={styles.leftSearchBarJustFlex}>
              </View>
              <TextInput
                  style={styles.searchBar}
                  placeholderTextColor="#bdc3c7"
                  placeholder="Søk"
                  keyboardType="web-search"
                  fontFamily={font.primary}
                  underlineColorAndroid="transparent"
                  onChangeText={(text) => this.textChanged(text)}
                  onSubmitEditing={() => this.submitSearch(this.state.searchFieldValue)} 
                  value={this.state.searchFieldValue}
              />
              <CancelBtn text={this.state.btnText} searchEnded={this.searchEnded}/>
            </View>
              <View style={styles.btnBar}>
                <ScrollView
                  directionalLockEnabled={false}
                  horizontal={true}
                  indicatorStyle={'white'}
                  >
                  <RadioButtons
                    options={ categoryList }
                    onSelection={ setSelectedOption.bind(this) }
                    selectedOption={this.state.selectedOption }
                    renderOption={ renderOption }
                    renderContainer={ renderContainer }
                  />
                </ScrollView>
              </View>  
          </View>
        </View>
    )
  }
}

class CancelBtn extends React.Component {
  props: {
    text: string,
    searchEnded: () => void
  }
  
  render() {
    return(
       <TouchableOpacity activeOpacity={0.5} style={styles.btnCancel} onPress={this.props.searchEnded}>
          <Text style={styles.input}>{this.props.text}</Text>
        </TouchableOpacity>
    )
  }
}

class BarBtn extends React.Component {
  props: {
    text: string
  }

  render() {
    return(
      <TouchableOpacity activeOpacity={0.2} >
        <Text style={styles.inputBtnBottom}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

export class IconGet extends React.Component {
  props: {
    icon: string,
    size: number,
    color: string,
    handlePress: () => void
  }
    
  render() {
    return(
        <TouchableOpacity activeOpacity={0.5} style={styles.btnIconStyle} onPress={this.props.handlePress}>
          <Icon size={this.props.size} name={this.props.icon} color={this.props.color} />
        </TouchableOpacity>          
    )
  }
}