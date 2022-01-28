import React from 'react';
import { TextInput, View, Button} from 'react-native';
import {styles} from './style/globalStyles';

const AddPerson = ({submitHandler, person, setPerson}) => {
  return (
    <View style={styles.inputView}>
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
