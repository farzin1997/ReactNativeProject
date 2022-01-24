import React from 'react';
import {StyleSheet, View, Text, Dimensions, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const {width, height} = Dimensions.get('window');

const Header = ({headerText, press}) => {
  return (
    <View style={styles.headerStyle}>
      <Pressable style={{padding: 5}} onPress={press}>
        <Icon name="arrow-back" size={25} color="#900" />
      </Pressable>
      <Text style={styles.headerText}>{headerText}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    width: width,
    height: 50,
    paddingHorizontal: 20,
    elevation: 1,
  },
  headerText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
