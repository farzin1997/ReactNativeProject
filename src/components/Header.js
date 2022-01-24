import React from 'react';
import {StyleSheet, Text, View, Dimensions, Pressable} from 'react-native';
const {width, height} = Dimensions.get('window');

const Header = ({headerText, press}) => {
  return (
    <Pressable style={styles.headerStyle} onPress={press}>
      <Text style={styles.headerText}>{headerText}</Text>
    </Pressable>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    width: width,
    height: 50,
  },
  headerText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
