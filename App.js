import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import { Button, FlatList, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';

import store from './redux/store'
import HomeScreen from './src/Components/Homepage'
import AddTaskScreen from './src/Components/AddTask'
import UserScreen from './src/Components/Users'
import Users from './src/Components/Users';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  title: {
    fontSize: 26,
    marginTop: 150,
    marginBottom: 25,
  },
  item: {
    marginTop: 10,
  },
  listView: {
    width: '80%',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  }
});

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


