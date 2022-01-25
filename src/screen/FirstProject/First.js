import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Header from '../../components/Header';
import Btn from '../../components/Btn';

const {width, height} = Dimensions.get('window');
const First = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Header headerText={'First practice'} press={() => navigation.goBack()} />
      <View style={styles.body}>
        <Btn
          value={'useState'}
          otherStyles={styles.btn}
          onPress={() => navigation.navigate('UseState')}
        />
        <Btn
          value={'textInput'}
          otherStyles={styles.btn}
          onPress={() => navigation.navigate('TextInput')}
        />
        <Btn
          value={'ScrollView'}
          otherStyles={styles.btn}
          onPress={() => navigation.navigate('ScrollViews')}
        />
      </View>
    </View>
  );
};

export default First;

const styles = StyleSheet.create({
  btn: {
    width: width / 3.5,
    backgroundColor: 'hotpink',
  },
  body: {
    marginTop: 15,
    flexDirection: 'row',
    width: width,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});
