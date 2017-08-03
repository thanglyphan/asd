import {
  StyleSheet
} from 'react-native'

export const styles = StyleSheet.create({
  headerWrap: {
    display: 'flex',
    height: 120,
    flexDirection: 'column',
    backgroundColor: color.primary
  },
  imageWrap: {
    alignItems: 'flex-end',
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  image: {
    width: 40,
    height: 40
  },
  btnIconStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  input: {
    color: '#FFF',
    paddingHorizontal: 5,
    fontWeight: '400',
    fontSize: 14,
    fontFamily: font.primary
  },
  inputBtnBottom: {
    color: '#FFF',
    paddingHorizontal: 20,
    marginBottom: 10,
    fontWeight: '400',
    fontSize: 14,
    fontFamily: font.primary,
  },
  inputWrap: {
    flexDirection: 'row',
    marginVertical: 5,
    backgroundColor: 'rgba(0,0,0,.35)',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  icon: {
    height: 20,
    width: 20
  },
  footer: {
    flex: 0.5,
  },
  footerSpace: {
    flex: 0.05
  },
  searchWrap: {
    flex: 0.35,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  searchBar: {
    flex: 0.6,
    backgroundColor: 'rgba(0,0,0,.5)',
    borderWidth: 1,
    color: '#FFF',
    borderRadius: 5,
    fontSize: 13,
    textAlign: 'center'
  },
  leftSearchBarJustFlex: {
    flex: 0.2,
  },
  btnCancel: {
    flex: 0.2,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  centerRow: {
    flexDirection: 'row'
  },
  btnBar: {
    flex: 0.6,
    paddingHorizontal: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  overlay: {
    position: 'absolute'
  }
})
