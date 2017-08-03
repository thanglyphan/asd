//@flow
import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import color from '../../assets/color'
import {IconGet} from './Header'
const icon = <Icon size={24} name="meetup" color= {color.tabBottomTabUnSelected} />
import font from '../../assets/font'

export default class HeaderDetails extends React.Component {
  props: {
    title: string,
    goPrev: () => void
  }
  render() {
    return(
      <View style={styles.wrapper}>
        <View style={styles.leftBtn}>
          <IconGet icon="chevron-left" size={20} color="#FFF" handlePress={this.props.goPrev}/>
        </View>
        <View style={styles.centerHeader}>
          <Text style={styles.titleStyle}>{this.props.title}</Text>
        </View>
        <View style={styles.rightBtn}>
          <IconGet icon="heart" size={20} color="#FFF" handlePress={this.props.goPrev}/>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({ 
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: color.primary,
    height: 55,
    alignItems: 'center'
  },
  titleStyle: {
    fontFamily: font.primary,
    fontSize: 16,
    color: '#FFF',
    fontWeight: '400'
  },
  leftBtn: {
    flex: 0.1,
    alignItems: 'flex-start'
  },
  centerHeader: {
    flex: 0.8,
    alignItems: 'center'
  },
  rightBtn: {
    flex: 0.1,
  }
})


