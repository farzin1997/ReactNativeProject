import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';

const {width, height} = Dimensions.get('window');

const TextInputs = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.showName}>
        <Text style={styles.label}>نام : {name}</Text>
        <Text style={styles.label}>سن : {age}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>نام :</Text>
        <TextInput
          style={styles.input}
          placeholder="نام خود را وارد کنید"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>سن :</Text>
        <TextInput
          style={styles.input}
          onChangeText={value => setAge(value)}
          placeholder="سن خود را وارد کنید"
          keyboardType="numeric"
        />
      </View>
    </View>
  );
};

export default TextInputs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: width / 1.5,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gold',
    borderRadius: 4,
  },
  label: {
    color: 'black',
    fontSize: 15,
    // fontWeight: 'bold',
    textAlign: 'right',
    fontFamily: 'byekan',
  },
  showName: {
    width: width / 1.5,
    backgroundColor: 'gold',
    borderRadius: 4,
    padding: 10,
  },
  input: {
    textAlign: 'right',
    fontFamily: 'byekan',
    width: 200,
  },
});
