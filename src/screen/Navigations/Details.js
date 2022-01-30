import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Details = ({navigation, route}) => {
  const {text} = route.params;
  return (
    <View style={styles.container}>
      <Text>جزئیات</Text>
      <Text>{text}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
