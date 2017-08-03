//@flow

import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { View, Text, Button, StyleSheet, Navigator, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import color from '../../assets/color'
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';


const icon = <Icon size={24} name="meetup" color= {color.tabBottomTabUnSelected} />


export default class TestTwo extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Two',
    tabBarIcon: ({tintColor}) => (
      <Icon size={24} name="meetup" color={tintColor} />
    )  
  }
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ''
    }
  }
  
  

  render() {
    const options = [
      "Option 1",
      "Option 2"
    ];

    function setSelectedOption(selectedOption){
      this.setState({
        selectedOption
      });
    };

    function renderOption(option, selected, onSelect, index){
      const style = selected ? { fontWeight: 'bold'} : {}

      return (
        <TouchableWithoutFeedback onPress={onSelect} key={index}>
          <View><Text style={style}>{option}</Text></View>
        </TouchableWithoutFeedback>
      );
    }

    function renderContainer(optionNodes){
      return <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>{optionNodes}</View>;
    }
    return(
      <View style={{marginTop: 10, padding: 20, backgroundColor: 'white'}}>
        <Text style={{paddingBottom: 10, fontWeight:'bold'}}>Super basic</Text>
        <ScrollView
          directionalLockEnabled={false}
          horizontal={true}
          indicatorStyle={'white'}
          >
          <RadioButtons
            options={ options }
            onSelection={ setSelectedOption.bind(this) }
            selectedOption={this.state.selectedOption }
            renderOption={ renderOption }
            renderContainer={ renderContainer }
          />
        </ScrollView>
        
        <Text>Selected option: {this.state.selectedOption || 'none'}</Text>
      </View>
    )
  }
}

