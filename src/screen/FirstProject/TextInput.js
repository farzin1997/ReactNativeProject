import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';

const {width, height} = Dimensions.get('window');

const TextInputs = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <View style={styles.container}>
      <View
        style={{
          width: width / 2,
          backgroundColor: 'gold',
          borderRadius: 4,
          padding: 10,
        }}>
        <Text style={styles.label}>نام : {name}</Text>
        <Text style={styles.label}>سن : {age}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>نام :</Text>
        <TextInput
          style={{textAlign: 'right'}}
          placeholder="نام خود را وارد کنید"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>سن :</Text>
        <TextInput
          style={{textAlign: 'right'}}
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
    width: width / 2,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gold',
    borderRadius: 4,
  },
  label: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
