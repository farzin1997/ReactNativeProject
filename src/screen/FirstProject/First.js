import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import Header from '../../components/Header';
import Btn from '../../components/Btn';
import UseState from './UseState';
import TextInput from './TextInput';
import ScrollViews from './ScrollViews';
import SectionLists from './SectionLists';
const {width, height} = Dimensions.get('window');
const First = ({navigation}) => {
  const [routerTab, setRouterTab] = useState(0);
  return (
    <View style={{flex: 1}}>
      <Header headerText={'اولین تمرین'} onPress={() => navigation.goBack()} />
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
          value={'FlatList'}
          otherStyles={[
            styles.btn,
            {backgroundColor: routerTab == 3 ? 'green' : 'hotpink'},
          ]}
          onPress={() => setRouterTab(3)}
        />
        <Btn
          color={routerTab == 4 ? 'white' : 'black'}
          value={'SctionList'}
          otherStyles={[
            styles.btn,
            {backgroundColor: routerTab == 4 ? 'green' : 'hotpink'},
          ]}
          onPress={() => setRouterTab(4)}
        />
      </View>
      {routerTab == 1 && <UseState />}
      {routerTab == 2 && <TextInput />}
      {routerTab == 3 && <ScrollViews />}
      {routerTab == 4 && <SectionLists />}
    </View>
  );
};

export default First;

const styles = StyleSheet.create({
  btn: {
    width: width / 4.5,
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
