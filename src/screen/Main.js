import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';
import Btn from '../components/Btn';

const {width, height} = Dimensions.get('window');

const Main = ({navigation}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [list, setList] = useState([
    {id: 1, title: 'first practice', onPress: 'First'},
    {id: 2, title: 'تقویم', onPress: 'TextInput'},
    {id: 3, title: 'مپ'},
    {id: 4, title: 'چند زبانه'},
    {id: 5, title: 'redux'},
    {id: 6, title: 'context'},
    {id: 7, title: 'graphQl'},
    {id: 8, title: 'restfullApi'},
    {id: 8, title: 'tic tac toe'},
  ]);
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
        <FlatList
          numColumns={2}
          data={list}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <Btn
              value={item.title}
              otherStyles={{marginHorizontal: 10}}
              onPress={() => navigation.navigate(item.onPress)}
            />
          )}
        />
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
