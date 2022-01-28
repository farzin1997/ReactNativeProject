import React, {useState} from 'react';
import {
  FlatList,
  View,
  Keyboard,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import Header from '../../components/Header';
import AddPerson from './components/AddPerson';
import Persons from './components/Persons';
import {styles} from './components/style/globalStyles';

const PersonManager = ({navigation}) => {
  const [persons, setPersons] = useState([]);
  const [person, setPerson] = useState('');

  const deletedHandler = key => {
    setPersons(prevPersons => prevPersons.filter(item => item.key != key));
    // const filtered = persons.filter(item => item.key != key);
    // setPersons(filtered);
    console.log('deleted', persons);
  };
  const AddPersonHandler = () => {
    if (person.length > 6) {
      setPersons(prevPersons => [
        ...prevPersons,
        {
          fullName: person,
          key: Math.floor(Math.random() * 1000).toString(),
          isCompleted: false,
        },
      ]);
      setPerson('');
      Keyboard.dismiss();
    } else {
      Alert.alert('منو ببین!!!', 'اسم شخص نباید کمتر از 6 کاراکتر باشه', [
        {text: 'فهمیدم'},
      ]);
    }
  };

  const completedHandler = key => {
    const allPersons = [...persons];
    const personIndex = allPersons.findIndex(item => item.key == key);
    const person = allPersons[personIndex];
    person.isCompleted = !person.isCompleted;
    allPersons[personIndex] = person;

    setPerson(allPersons);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header
          headerText={'مدیریت کننده ی اشخاص'}
          onPress={() => navigation.goBack()}
          backgroundColor={'orangered'}
          iconColor={'black'}
        />
        <View style={styles.body}>
          <AddPerson
            submitHandler={AddPersonHandler}
            person={person}
            setPerson={setPerson}
          />
          <View style={styles.items}>
            <FlatList
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.key}
              data={persons}
              renderItem={({item}) => (
                <Persons
                  person={item}
                  deleted={() => deletedHandler(item.key)}
                  completed={completedHandler}
                />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PersonManager;
