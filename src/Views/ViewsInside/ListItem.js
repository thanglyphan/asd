//@flow
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  LayoutAnimation,
  Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import color from '../../assets/color'
import font from '../../assets/font'
import ListedView from './ListedView'
import RecipeView from './RecipeView'

export default class ListItem extends React.Component {
  props: {
    item: [],
    showDetails: () => void
  }

  render() {
    return (
        <TouchableOpacity activeOpacity={0.5} style={styles.wrapper} onPress={this.props.showDetails}>
        <Image
            style={styles.image}
            source={{
              uri: this.props.item.picture,
            }}
          />
          
        <View style={styles.underImage}>
          <View style={styles.underImageBarTop}>
            <View style={styles.imageTextWrap}>
              <Icon size={20} name='ios-star-outline' color='black' />
              <Text style={styles.txtStyle}>{this.props.item.category}</Text>
            </View>
            <View style={styles.imageTextWrap}>
              <Icon size={20} name='ios-timer-outline' color='black' />
              <Text style={styles.txtStyle}>{this.props.item.level}</Text>
            </View>
            <View style={styles.imageTextWrap}>
              <Icon size={20} name='ios-nutrition-outline' color='black' />
              <Text style={styles.txtStyle}>{this.props.item.calorie}</Text>
            </View>
            
          </View>
          <View style={styles.underImageBarBottom}>
            <View style={styles.underImageBarBottomLeft}>
            
            </View>
            <View style={styles.underImageBarBottomCenter}>
              <Text style={styles.header}>{this.props.item.title}</Text>
            </View>
            <View style={styles.underImageBarBottomRight}>
              <Text style={styles.txtStyle}>{this.props.item.amountsaved}</Text>
              <Icon size={20} name='ios-heart-outline' color='red' />
            </View>
          </View>
        </View>
        </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    height: 150,
    flexDirection: 'column',
    backgroundColor: '#FFF',
    marginVertical: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#E0E0E0'
  },
  image: {
    flex: 0.5,
    borderRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  underImage: {
    flex: 0.5
  },
  underImageBarTop: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  underImageBarBottom: {
    flex: 0.4,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  underImageBarBottomLeft:{
    flex: 0.15
  },
  underImageBarBottomCenter:{
    flex: 0.7,    
  },
  underImageBarBottomRight:{
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageTextWrap: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  txtStyle: {
    marginHorizontal: 5,
    fontFamily: font.primary,
    fontSize: 12,
    color: 'black'
  },
  header: {
    fontFamily: font.primary,
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
  },
})
