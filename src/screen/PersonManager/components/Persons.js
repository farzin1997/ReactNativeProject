import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Pressable,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const {width, height} = Dimensions.get('window');

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

const styles = StyleSheet.create({
  person: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItem: 'center',
    paddingHorizontal: 25,
    borderWidth: 1,
    width: width - 65,
    alignItems: 'center',
    borderStyle: 'dashed',
    borderColor: 'orangered',
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 9,
    backgroundColor: 'white',
  },
  personIndex: {
    color: 'red',
  },
});
