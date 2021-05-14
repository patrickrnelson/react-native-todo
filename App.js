// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import store from './redux/store'
import HomeScreen from './src/Components/Homepage'
import AddTaskScreen from './src/Components/AddTask'
import UserScreen from './src/Components/Users'

const Tab = createBottomTabNavigator();

function App() { 

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Add" component={AddTaskScreen} />
          <Tab.Screen name="Users" component={UserScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;


