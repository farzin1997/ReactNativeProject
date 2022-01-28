import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const UseState = () => {
  const [react, setReact] = useState('React Native');
  const [flutter, setFlutter] = useState('Flutter');
  const [routerTab, setRouterTab] = useState(0);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/image/duck.png')}
        style={styles.imageHeader}
      />
      <Text style={styles.title}>
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
      {routerTab == 1 && (
        <>
          <Text style={{color: 'darkblue'}}>{react} خب قطعا </Text>
          <Image
            source={require('../../assets/image/react.png')}
            style={styles.imageReact}
          />
        </>
      )}
      {routerTab == 2 && (
        <>
          <Text style={{color: 'darkred'}}>{flutter} خب قطعا</Text>
          <Image
            source={require('../../assets/image/flutter.png')}
            style={styles.imageflutter}
          />
        </>
      )}
    </View>
  );
};

export default UseState;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
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
  title: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'byekan',
  },
  imageHeader: {
    width: 150,
    height: 150,
    marginVertical: 10,
    borderRadius: 25,
  },
  imageReact: {
    width: 150,
    height: 150,
    marginVertical: 10,
  },
  imageflutter: {
    width: 120,
    height: 120,
    marginVertical: 20,
  },
});
