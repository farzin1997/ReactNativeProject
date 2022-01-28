import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';

const Calender = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Header
        headerText={'تقویم'}
        onPress={() => navigation.goBack()}
        backgroundColor={'skyblue'}
        iconColor={'black'}
      />
      <View>
        <Image
          source={require('../../assets/image/duck.png')}
          style={{width: 200, height: 200}}
        />
        <Image
          source={{uri: 'https://picsum.photos/536/354'}}
          style={{width: 200, height: 200}}
        />
      </View>
    </View>
  );
};

export default Calender;

const styles = StyleSheet.create({});
