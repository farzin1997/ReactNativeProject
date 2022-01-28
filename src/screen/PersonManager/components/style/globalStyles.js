import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  items: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  person: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItem: 'center',
    paddingHorizontal: 25,
    borderWidth: 1,
    width: width - 65,
    alignItems: 'center',
    borderStyle: 'dashed',
    borderColor: 'orangered',
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 9,
    backgroundColor: 'white',
  },
  personIndex: {
    fontFamily: 'byekan',
  },
  inputView: {
    width: width - 65,
  },
  input: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 'orangered',
    borderRadius: 4,
    paddingHorizontal: 15,
    color: 'black',
    marginBottom: 10,
  },
});
