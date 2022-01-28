import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  View,
  FlatList,
  Pressable
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const {width, height} = Dimensions.get('window');

const ScrollViews = () => {
  const [list, setList] = useState([
    {id: 1, language: 'react'},
    {id: 2, language: 'flutter'},
    {id: 3, language: 'node'},
    {id: 4, language: 'javeScript'},
    {id: 5, language: 'phaton'},
    {id: 6, language: 'php'},
    {id: 7, language: 'c#'},
    {id: 8, language: 'react'},
    {id: 9, language: 'flutter'},
    {id: 10, language: 'node'},
    {id: 11, language: 'javeScript'},
    {id: 12, language: 'phaton'},
    {id: 13, language: 'php'},
    {id: 14, language: 'c#'},
  ]);
  const deleteLanguage = id => {
    const filtered = list.filter(item => item.id != id);
    setList(filtered);
    console.log('filter:', filtered);
    //یا اینجوری
    //setList((prevState)=>prevState.filter(item => item.id != id))
  };
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        numColumns={2}
        renderItem={({item}) => (
          <Pressable
            onPress={() => deleteLanguage(item.id)}
            style={styles.card}>
            <Text style={{color: 'black', fontSize: 16}}>{item.language}</Text>
            <Icon name="trash" size={25} color="#900" />
          </Pressable>
        )}
      />
    </View>
    // <ScrollView
    //   contentContainerStyle={{alignItems: 'center'}}
    //   style={styles.container}>
    //   {list.map(item => {
    //     return (
    //       <Text key={item.id} style={styles.card}>
    //         {item.language}
    //       </Text>
    //     );
    //   })}
    // </ScrollView>
  );
};

export default ScrollViews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  card: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: width / 3,
    paddingHorizontal: 10,
    paddingVertical: 15,
    // textAlign: 'center',
    marginVertical: 10,
    backgroundColor: 'skyblue',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'blue',
    elevation: 3,
    color: 'white',
    marginHorizontal: 10,
  },
});
