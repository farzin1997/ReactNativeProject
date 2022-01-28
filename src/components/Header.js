import React from 'react';
import {StyleSheet, View, Text, Dimensions, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const {width, height} = Dimensions.get('window');

const Header = ({
  headerText,
  onPress,
  backgroundColor = 'lightgreen',
  iconColor = '#900',
}) => {
  return (
    <View style={[styles.headerStyle, {backgroundColor}]}>
      <Pressable style={{padding: 5}} onPress={onPress}>
        <Icon name="arrow-back" size={25} color={iconColor} />
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
    width: width,
    height: 50,
    paddingHorizontal: 20,
    elevation: 1,
  },
  headerText: {
    color: 'black',
    fontSize: 15,
    fontFamily:'byekan'
  },
});
