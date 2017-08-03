//@flow
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import color from '../../assets/color'
import TagInput from 'react-native-tag-input';


const icon = <Icon size={24} name="meetup" color= {color.tabBottomTabUnSelected} />

export default class TestFour extends React.Component {
  state = {
    tags: [],
  };

  static navigationOptions = {
    tabBarLabel: 'One',
    tabBarIcon: ({tintColor}) => (
      <Icon size={24} name="meetup" color={tintColor} />
    )
  }
  onChangeTags = (tags) => {
    this.setState({
      tags,
    });
  };

  render() {
    const inputProps = {
      keyboardType: 'default',
      placeholder: 'email',
      autoFocus: true,
    };

    return (
      <View style={{ flex: 1, margin: 10, marginTop: 30 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <Text>To: </Text>
          <TagInput
            value={this.state.tags}
            onChange={this.onChangeTags}
            tagColor="blue"
            tagTextColor="white"
            inputProps={inputProps}
            numberOfLines={2}
          />
        </View>
      </View>
    );
  }
}