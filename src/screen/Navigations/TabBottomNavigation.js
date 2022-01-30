import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
    </View>
  );
};
const InformationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Information!</Text>
    </View>
  );
};
const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Chat!</Text>
    </View>
  );
};
const ActiveScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Active!</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Information') {
              iconName = focused
                ? 'information-circle'
                : 'information-circle-outline';
            } else if (route.name === 'Chat') {
              iconName = focused
                ? 'chatbox-ellipses'
                : 'chatbox-ellipses-outline';
            } else if (route.name === 'Active') {
              iconName = focused ? 'magnet' : 'magnet-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'violet',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 14,
            fontFamily: 'byekan',
          },
        }}>
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{title: 'تنظیمات'}}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{title: 'پیام'}}
        />
        <Tab.Screen
          name="Active"
          component={ActiveScreen}
          options={{title: 'فعالیت'}}
        />
        <Tab.Screen
          name="Information"
          component={InformationScreen}
          options={{title: 'اطلاعات'}}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'خانه'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
