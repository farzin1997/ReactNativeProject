import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Header from '../../components/Header';
import Btn from '../../components/Btn';

const {width, height} = Dimensions.get('window');
const First = ({navigation}) => {
  return (
    <View>
      <Header headerText={'First practice'} press={() => navigation.goBack()} />
      <Text>first</Text>
      <View style={styles.body}>
        <Btn value={'textInput'} otherStyles={styles.btn} />
        <Btn value={'textInput'} otherStyles={styles.btn} />
        <Btn value={'textInput'} otherStyles={styles.btn} />
      </View>
    </View>
  );
};

export default First;

const styles = StyleSheet.create({
  btn: {
    width: width / 3.5,
    backgroundColor: 'teal',
  },
  body: {
    flexDirection: 'row',
    width: width,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});
