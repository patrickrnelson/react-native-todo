// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import store from './redux/store'
import HomeScreen from './src/Components/Homepage'
import AddTaskScreen from './src/Components/AddTask'
import UserScreen from './src/Components/Users'

const Tab = createBottomTabNavigator();

function App() { 

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#42f44b',
          }}>
          <Tab.Screen 
            name="Home"
            component={HomeScreen} 
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({focused, color, size}) => (
                <Ionicons name="ios-home" color='turquoise' size='30' />
              ),
            }} />
          <Tab.Screen 
            name="New" 
            component={AddTaskScreen}
            options={{
              tabBarLabel: 'New',
              tabBarIcon: ({focused, color, size}) => (
                <Ionicons name="ios-add" color='turquoise' size='35' />
              ),
            }} />
          {/* <Tab.Screen name="Users" component={UserScreen} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;


