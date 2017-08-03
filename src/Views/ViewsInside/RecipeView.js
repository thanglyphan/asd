import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import HeaderDetails from './HeaderDetails'
import Icon from 'react-native-vector-icons/Ionicons'
import IconFA from 'react-native-vector-icons/EvilIcons'
import color from '../../assets/color'
import font from '../../assets/font'
import Swiper from 'react-native-swiper'


class Ingredient extends React.Component {
  props:{
    portions: number,
    list: []
  }
  render(){
    return(
      <Text style={styles.txtStyleIngredients}>{this.props.list[0] * this.props.portions} {this.props.list[1]} {this.props.list[2]}</Text>
    )
  }
}

class Tutorial extends React.Component {
  props:{
    number: number,
    step: string
  }
  render(){
    return(
      <Text style={styles.txtStyleTutorial}><Text style={{fontWeight: "bold"}}>{this.props.number + 1}</Text>. {this.props.step} </Text>
    )
  }
}

class Nutrition extends React.Component {
  props:{
    portions: number,
    nutrition: []
  }
  render(){
    return(
      <Text style={styles.txtStyleTutorial}> {this.props.nutrition[0] * this.props.portions} {this.props.nutrition[1]} {this.props.nutrition[2]}</Text>
    )
  }
}

export default class RecipeView extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
    tabBarVisible: false,
  });
  constructor(){
    super()
    this.state = {
      portions: 1,
      swipedRight: false,
      swipedLeft: true
    }
  }
  
  handlePortions = (bool) => {
    if(this.state.portions >= 1 && bool) {
      this.setState({portions: this.state.portions + 1})
    } else if(this.state.portions >= 2 && !bool){
      this.setState({portions: this.state.portions - 1})
    }
  }
  
  goPrev = () => {
    this.props.navigation.goBack();
  }
  
  renderIngredients(navigations) {
    var list = [];
    for (var i = 0; i < navigations.state.params.item.ingredients.length; i++) {
      list.push(<Ingredient key={i} list={navigations.state.params.item.ingredients[i]} portions={this.state.portions}  />);
    }
    return list;
  }
  
  renderTutorial(navigations) {
    var list = [];
    for (var i = 0; i < navigations.state.params.item.tutorial.length; i++) {
      list.push(<Tutorial key={i} number={i} step={navigations.state.params.item.tutorial[i] } />);
    }
    return list;
  }
  renderNutrition(navigations) {
    var list = [];
    for (var i = 0; i < navigations.state.params.item.nutrition.length; i++) {
      list.push(<Nutrition key={i} nutrition={navigations.state.params.item.nutrition[i]} portions={this.state.portions} />);
    }
    return list;
  }
  handleForward = (bool) => {
    if(bool && !this.state.swipedRight){
      this.setState({swipedRight: true, swipedLeft: false})
      this.refs.swiper.scrollBy(1)
    } else if(!bool && !this.state.swipedLeft){
      this.setState({swipedRight: false, swipedLeft: true})
      this.refs.swiper.scrollBy(-1)
    }
  }
  render() {
    const navigations = this.props.navigation;
    return (
       <View style={styles.wrapper}>
        <HeaderDetails title={navigations.state.params.item.title} goPrev={this.goPrev}/> 
        <View style={styles.imageWrap}>
          <Image
            style={styles.image}
            source={{
              uri: navigations.state.params.item.picture
            }}
          />
          <View style={styles.imageBar}>
            <View style={styles.imageBarLeft}>
              <View style={styles.imageBarLeftInside}>
                <Icon size={20} name='ios-timer-outline' color='black' />
                <Text style={styles.txtStyle}>{navigations.state.params.item.level}</Text>
              </View>
              <View style={styles.imageBarRightInside}>
                <Icon size={20} name='ios-nutrition-outline' color='black' />
                <Text style={styles.txtStyle}>{navigations.state.params.item.calorie}</Text>
              </View>
            </View>
            <View style={styles.imageBarRight}>
              <TouchableOpacity onPress={() => this.handlePortions(false)}>
                <IconFA size={20} name='minus' color='black' />
              </TouchableOpacity>
              <Text style={styles.txtStyle}>{this.state.portions}</Text>
              <TouchableOpacity onPress={() => this.handlePortions(true)}>
                <IconFA size={20} name='plus' color='black' />
              </TouchableOpacity>
              <Text style={styles.txtStyle}>Porsjoner</Text>   
            </View>
          </View>
        </View>
        <View style={styles.wrapperInside}>
          <View style={styles.scrollWrap}>
            <Swiper
              ref='swiper'
              index={0}
              loop={false}
              height={'auto'}
              showsPagination={false}
              removeClippedSubviews={false}
              >
              <ScrollView>
                <View style={styles.borderBottom}>
                  <Text style={styles.header}>Ingredienser</Text>
                </View>
                {this.renderIngredients(navigations)}
                <View style={styles.borderBottom}>
                  <Text style={styles.header}>Utførelse</Text>
                </View>
                {this.renderTutorial(navigations)}
              </ScrollView>
              <View>
                <View style={styles.borderBottom}>
                  <Text style={styles.header}>Kalorier og næringsinnhold ({this.state.portions} porsjoner)</Text>
                </View>
                {this.renderNutrition(navigations)}
              </View>
            </Swiper>
          </View>
          <View style={styles.footerUnderScroll}>
            <View style={styles.footerUnderScrollLeft}>
              <TouchableOpacity onPress={() => this.handleForward(false)}>
                <IconFA size={30} name='arrow-left' color='#FFF' />
              </TouchableOpacity>
            </View>
            <View style={styles.footerUnderScrollCenter}>
              <TouchableOpacity>
                <Text style={styles.bottomBtn}>Legg til mine oppskrifter</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footerUnderScrollRight}>
              <TouchableOpacity onPress={() => this.handleForward(true)}>
                <IconFA size={30} name='arrow-right' color='#FFF' />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#FFF',
  },
  imageWrap: {
    flex: 0.35,
  },
  borderBottom: {
    marginVertical: 20,
    marginHorizontal: 5,
    borderBottomWidth: 0.3,
    borderColor: '#9E9E9E'
  },
  txtStyle: {
    marginHorizontal: 5,
    fontFamily: font.primary,
    fontSize: 12,
    color: 'black'
  },
  txtStyleIngredients: {
    marginVertical: 1.5,
    marginHorizontal: 5,
    fontFamily: font.primary,
    fontSize: 12,
    color: 'black',
  },
  txtStyleTutorial: {
    marginVertical: 5,
    marginHorizontal: 5,
    fontFamily: font.primary,
    fontSize: 12,
    color: 'black'
  },
  image: {
    flex: 0.8,
    width: null,
  },
  imageBar: {
    flex: 0.2,
    flexDirection: 'row',
    backgroundColor: color.screenBackground
  },
  imageBarLeft: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  imageBarLeftInside:{
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageBarRightInside: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  imageBarRight: {
    flex: 0.4,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10
  },
  wrapperInside: {
    flex: 0.65,
  },
  scrollWrap: {
    flex: 0.9,
    marginHorizontal: 5,
  },
  footerUnderScroll: {
    flex: 0.1,
    backgroundColor: color.primary,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  header: {
    fontFamily: font.primary,
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
  bottomBtn: {
    fontFamily: font.primary,
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
  },
  footerUnderScrollLeft: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerUnderScrollCenter: {
    flex: 0.6,
    marginHorizontal: 3,
    marginVertical: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 0.1,
    borderColor: '#FFF',
    backgroundColor: 'rgba(0,0,0,.1)',
  },
  footerUnderScrollRight: {
    flex: 0.2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})