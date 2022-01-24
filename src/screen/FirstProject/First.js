import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';

const First = ({navigation}) => {
  return (
    <View>
      <Header headerText={'FirstProject'} press={()=>navigation.goBack()}/>
      <Text>first</Text>
    </View>
  );
};

export default First;

const styles = StyleSheet.create({});
