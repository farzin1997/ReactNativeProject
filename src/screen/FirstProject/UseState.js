import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const UseState = () => {
  const [react, setReact] = useState('React Native');
  const [flutter, setFlutter] = useState('Flutter');
  const [click, setClick] = useState(true);
  const [click2, setClick2] = useState(false);
  const handle = () => {
    if (click == false && click2 == false) {
      null;
    } else if (click == true && click2 == false) {
      react;
    } else if (click == false && click2 == true) {
      flutter;
    } else {
      null;
    }
    console.log('************');
    console.log('handle', handle);
    console.log('handle', click, click2);
    console.log('************');
  };
  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 16}}>
        به نظر شما react native بهتره یا flutter؟
      </Text>
      {/* <View style={styles.row}>
        <Text
          onPress={() => setClick(!click)}
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
          onPress={() => setClick2(!click2)}
          style={[
            styles.text,
            {
              backgroundColor: 'gold',
              borderColor: 'darkorange',
            },
          ]}>
          {flutter}
        </Text>
      </View> */}
      {/* {click ? <Text>{react} قطعا </Text> : null}
      {click2 ? <Text>{flutter} قطعا </Text> : null} */}
      <Text
        onPress={() => setClick(!click)}
        style={[
          styles.text,
          {
            backgroundColor: click ? 'skyblue' : 'gold',
            borderColor: click ? 'blue' : 'darkorange',
          },
        ]}>
        {click ? 'React Native' : 'Flutter'}
      </Text>
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
