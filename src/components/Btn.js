import React from 'react';
import {StyleSheet, Text, Pressable, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const Btn = ({
  onPress,
  value,
  color = 'white',
  backgroundColor = 'purple',
  otherStyles = {},
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.buttons, {backgroundColor}, otherStyles]}>
      <Text style={{color}}>{value}</Text>
    </Pressable>
  );
};

export default Btn;

const styles = StyleSheet.create({
  buttons: {
    width: width / 2.5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderWidth: 1,
    marginVertical: 5,
    elevation: 5,
  },
});
