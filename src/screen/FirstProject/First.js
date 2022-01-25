import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import Header from '../../components/Header';
import Btn from '../../components/Btn';
import UseState from './UseState';
import TextInput from './TextInput';
import ScrollViews from './ScrollViews';
const {width, height} = Dimensions.get('window');
const First = ({navigation}) => {
  const [routerTab, setRouterTab] = useState(0);
  return (
    <View style={{flex: 1}}>
      <Header headerText={'First practice'} press={() => navigation.goBack()} />
      <View style={styles.customTab}>
        <Btn
          color={routerTab == 1 ? 'white' : 'black'}
          value={'useState'}
          otherStyles={[
            styles.btn,
            {backgroundColor: routerTab == 1 ? 'green' : 'hotpink'},
          ]}
          onPress={() => setRouterTab(1)}
        />
        <Btn
          color={routerTab == 2 ? 'white' : 'black'}
          value={'textInput'}
          otherStyles={[
            styles.btn,
            {backgroundColor: routerTab == 2 ? 'green' : 'hotpink'},
          ]}
          onPress={() => setRouterTab(2)}
        />
        <Btn
          color={routerTab == 3 ? 'white' : 'black'}
          value={'ScrollView'}
          otherStyles={[
            styles.btn,
            {backgroundColor: routerTab == 3 ? 'green' : 'hotpink'},
          ]}
          onPress={() => setRouterTab(3)}
        />
      </View>
      {routerTab == 1 && <UseState />}
      {routerTab == 2 && <TextInput />}
      {routerTab == 3 && <ScrollViews />}
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
  customTab: {
    // height: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
});
