import React from 'react';
import {Text, TouchableOpacity, Pressable, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {styles} from './style/globalStyles';

const Persons = ({person, deleted, completed}) => {
  return (
    <Pressable onPress={() => completed(person.key)} style={styles.person}>
      <Text
        style={[
          styles.personIndex,
          {
            color: person.isCompleted ? 'gray' : 'black',
            textDecorationLine: person.isCompleted ? 'line-through' : 'none',
          },
        ]}>
        {person.fullName}
      </Text>
      <TouchableOpacity
        onPress={() =>
          Alert.alert('مطمئنی؟', 'پاک بشه؟', [
            {text: 'نه منصرف شدم', onPress: () => console.log('close')},
            {text: 'اره پاک بشه', onPress: () => deleted(person.key)},
          ])
        }>
        <Icon name="trash" size={25} color="coral" />
      </TouchableOpacity>
    </Pressable>
  );
};

export default Persons;
