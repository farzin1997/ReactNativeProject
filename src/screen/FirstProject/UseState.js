import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const UseState = () => {
  const [react, setReact] = useState('React Native');
  const [flutter, setFlutter] = useState('Flutter');
  const [click, setClick] = useState(true);
  const [click2, setClick2] = useState(false);
  const [routerTab, setRouterTab] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 16}}>
        به نظر شما react native بهتره یا flutter؟
      </Text>
      <View style={styles.row}>
        <Text
          onPress={() => setRouterTab(1)}
          style={[
            styles.text,
            {
              backgroundColor: 'skyblue',
              borderColor: 'blue',
            },
          ]}>
          {react}
        </Text>
        <Text
          onPress={() => setRouterTab(2)}
          style={[
            styles.text,
            {
              backgroundColor: 'gold',
              borderColor: 'darkorange',
            },
          ]}>
          {flutter}
        </Text>
      </View>
      {routerTab == 1 && <Text style={{color:'darkblue'}}>{react}  خب قطعا  </Text>}
      {routerTab == 2 && <Text style={{color:'darkred'}}>{flutter} خب قطعا</Text>}
      {/* <Text
        onPress={() => setClick(!click)}
        style={[
          styles.text,
          {
            backgroundColor: click ? 'skyblue' : 'gold',
            borderColor: click ? 'blue' : 'darkorange',
          },
        ]}>
        {click ? 'React Native' : 'Flutter'}
      </Text> */}
    </View>
  );
};

export default UseState;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: 150,
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'blue',
    padding: 3,
    backgroundColor: 'skyblue',
    borderRadius: 3,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
});
