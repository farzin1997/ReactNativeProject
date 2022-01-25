import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './src/screen/Main';
import First from './src/screen/FirstProject/First';
import TextInput from './src/screen/FirstProject/TextInput';
import UseState from './src/screen/FirstProject/UseState';
import ScrollViews from './src/screen/FirstProject/ScrollViews';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="TextInput" component={TextInput} />
        <Stack.Screen name="UseState" component={UseState} />
        <Stack.Screen name="ScrollViews" component={ScrollViews} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
