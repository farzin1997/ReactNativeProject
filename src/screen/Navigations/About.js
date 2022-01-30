import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Btn from '../../components/Btn';

const About = ({navigation, route}) => {
  const {text} = route.params;
  return (
    <View style={styles.container}>
      <Text>درباره</Text>
      <Btn
        onPress={() => navigation.navigate('Home')}
        value={'برو به صفحه خانه'}
        backgroundColor="skyblue"
        color="black"
      />
      <Btn
        onPress={() => navigation.goBack()}
        value={'برو به صفحه خانه'}
        backgroundColor="skyblue"
        color="black"
      />
      <Btn
        onPress={() => navigation.canGoBack()}
        value={'برو به صفحه خانه'}
        backgroundColor="skyblue"
        color="black"
      />
      <Text>{text}</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
