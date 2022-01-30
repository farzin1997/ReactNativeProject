import * as React from 'react';
import {Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './src/screen/Main';
import First from './src/screen/FirstProject/First';
import PersonManager from './src/screen/PersonManager/PersonManager';
import Calender from './src/screen/Calender/Calender';
import Home from './src/screen/Navigations/Home';
import About from './src/screen/Navigations/About';
import Details from './src/screen/Navigations/Details';

const Stack = createStackNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerTitleStyle: {fontFamily: 'byekan'},
        }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="PersonManager" component={PersonManager} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'خانه',
            headerShown: true}}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{title: 'درباره', headerShown: true}}
          initialParams={{text: 'داده ای وجود ندارد'}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'جزئیات',
            headerShown: true,
            headerTitleStyle: {
              fontFamily: 'byekan',
            },
          }}
          initialParams={{text: 'داده ای وجود ندارد'}}
        />
        <Stack.Screen name="Calender" component={Calender} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;