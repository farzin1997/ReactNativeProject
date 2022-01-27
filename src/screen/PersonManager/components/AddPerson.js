import React from 'react';
import {StyleSheet, TextInput, View, Dimensions, Button} from 'react-native';

const {width, height} = Dimensions.get('window');

const AddPerson = ({submitHandler, person, setPerson}) => {
  return (
    <View style={{width:width-65}}>
      <TextInput
        style={styles.input}
        placeholder="نام را وارد کنید"
        value={person}
        onChangeText={setPerson}
        maxLength={35}
      />
      <Button
        color={'orange'}
        title="اضافه کردن شخص جدید"
        onPress={submitHandler}
      />
    </View>
  );
};

export default AddPerson;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 'orangered',
    borderRadius: 4,
    paddingHorizontal: 15,
    color: 'black',
    marginBottom: 10,
  },
});
