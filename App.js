import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './src/screen/Main';
import First from './src/screen/FirstProject/First';
import PersonManager from './src/screen/PersonManager/PersonManager';
import Calender from './src/screen/Calender/Calender';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="PersonManager" component={PersonManager} />
        <Stack.Screen name="Calender" component={Calender} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
