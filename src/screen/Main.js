import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Btn from '../components/Btn';
const {width, height} = Dimensions.get('window');
const Main = ({navigation}) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        <Text
          onPress={() => setIsSelected(!isSelected)}
          style={[
            styles.headerText,
            {backgroundColor: isSelected ? 'lightgreen' : 'pink'},
          ]}>
          تمرین ها
        </Text>
      </View>
      <View style={{width: width, alignItems: 'center'}}>
        <Btn
          color={'white'}
          value={'firstProject'}
          onPress={() => navigation.navigate('First')}
        />
        <Btn color={'white'} value={'تقویم'} />
        <Btn color={'white'} value={'مپ'} />
        <Btn color={'white'} value={'چند زبانه'} />
        <Btn color={'white'} value={'redux'} />
        <Btn color={'white'} value={'context'} /> 
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'violet',
  },
  headerText: {
    color: 'black',
    fontSize: 24,
    marginVertical: 10,
    borderRadius: 9,
    borderWidth: 1,
    paddingHorizontal: 10,
    elevation: 3,
    paddingVertical: 5,
  },
});
