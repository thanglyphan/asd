//@flow
import React, {Component, PropTypes} from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Image, TextInput, Keyboard, NavigatorIOS } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import color from '../../assets/color'
import font from '../../assets/font'
import Header from './Header'
import ListItem from './ListItem'
import RecipeView from './RecipeView'
import PopupDialog, { 
  DialogTitle,
  DialogButton,
  SlideAnimation
} from 'react-native-popup-dialog'
import TagInput from 'react-native-tag-input'
import {tempList} from './TempList'

const slideAnimation = new SlideAnimation({ slideFrom: 'bottom' });
const categoryList = ['Frokost', 'Lunsj', 'Middag', 'Kvelds', 'Mellom måltid', 'Annet']
const icon = (
  <Icon size={24} name="meetup" color={color.tabBottomTabUnSelected} />
)

export default class ListedView extends React.Component {
  constructor() {
    super()
    this.state = {
      addFieldValue: '',
      tags: []
    }
  }
  onChangeTags = (tags) => {
    this.setState({
      tags,
    });
  };
  
  static navigationOptions = {
    header: null,
    tabBarIcon: ({tintColor}) => (
      <Icon size={24} name="meetup" color={tintColor} />
    )
  }
  
  showDetails = (element) => {
    const {navigate} = this.props.navigation;
    navigate('Details', { item: element })
  }
  
  renderList() {
    var alle = []
    var frokost = []
    var lunsj = []
    var middag = []
    var kvelds = []
    var mellom = []
    var annet = []
    let categoryList = [ 'Alle', 'Frokost', 'Lunsj', 'Middag', 'Kvelds', 'Mellom måltid', 'Annet']
    
    for (var i = 0; i < tempList.length; i++) {
      var item = tempList[i]
      alle.push(<ListItem key={i} showDetails={() => this.showDetails( item )} item={ item }/>);
      if(item.category == categoryList[1]){
        frokost.push(<ListItem key={i} showDetails={() => this.showDetails( item )} item={ item }/>);
      } else if(item.category == categoryList[2]){
        lunsj.push(<ListItem key={i} showDetails={() => this.showDetails( item )} item={ item }/>);
      } else if(item.category == categoryList[3]){
        middag.push(<ListItem key={i} showDetails={() => this.showDetails( item )} item={ item }/>);        
      } else if(item.category == categoryList[4]){
        kvelds.push(<ListItem key={i} showDetails={() => this.showDetails( item )} item={ item }/>);        
      } else if(item.category == categoryList[5]){
        mellom.push(<ListItem key={i} showDetails={() => this.showDetails( item )} item={ item }/>);        
      } else if(item.category == categoryList[5]){
        annet.push(<ListItem key={i} showDetails={() => this.showDetails( item )} item={ item }/>);        
      } 
    }
    switch('Alle') {
      case categoryList[0]: return alle
      case categoryList[1]: return frokost
      case categoryList[2]: return lunsj
      case categoryList[3]: return middag
      case categoryList[4]: return kvelds
      case categoryList[5]: return mellom
      case categoryList[6]: return annet
    }
  }
  
  handlePress = () => {
    this.slideAnimationDialog.show()
  }
  
  textChanged = (text) => {
    this.setState({addFieldValue: text})
  }
  searchEnded = () => {
    Keyboard.dismiss()
  }
  submitSearch = (text) => {
    this.addToFoodList()
  }
  findRecipe = () => {
    this.slideAnimationDialog.dismiss()
  }
  
  render() {
    const inputProps = {
      keyboardType: 'default',
      placeholder: 'Skriv inn ingrediens',
      autoFocus: true,
    };

    return (
       <View style={styles.wrapper}>
        <Header handlePressAdd={this.handlePress} />
        <ScrollView>
          {this.renderList()}
        </ScrollView>  
        <PopupDialog
          width={250}
          dialogTitle={<DialogTitle title="Hva har du i kjøleskapet?" />}
          ref={(popupDialog) => {
            this.slideAnimationDialog = popupDialog;
          }}
          dialogAnimation={slideAnimation}>
          <View style={styles.dialogContentView}>
            <View style={styles.dialogHeader}>
              <Text style={styles.textStyle}>Legg til ingredienser</Text>
            </View>
            <View style={styles.dialogBody}>
              <TagInput
                  value={this.state.tags}
                  onChange={this.onChangeTags}
                  tagColor= {color.primary}
                  tagTextColor="#FFF"
                  inputProps={inputProps}
                  numberOfLines={4}
                />
            </View>
            <View style={styles.dialogFooter}>
              <View style={styles.btnFooter}>
                <TouchableOpacity activeOpacity={0.5} onPress={this.findRecipe}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Finn oppskrift</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </PopupDialog>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: color.screenBackground,
    justifyContent: 'flex-end',
  },
  imageStyleInside: {
    width: 40,
    height: 40
  },
  textStyle: {
    fontFamily: font.primary,
    fontWeight: '400'
  },
  dialogContentView: {
    flex: 1
  },
  dialogHeader: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogBody: {
    flex: 0.65,
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  dialogFooter: {
    flex: 0.2,
  },
  contentFooter: {
    flex: 0.65,
    paddingHorizontal: 10
  },
  btnFooter: {
    flex: 0.35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderColor: '#CCC',
    backgroundColor: color.primary,
    borderWidth: 1,
    width: 120,
    height: 35,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    backgroundColor: 'transparent',
    color: '#FFF',
    textAlign: 'center',
    fontFamily: font.primary,
    fontSize: 14
  },
})



