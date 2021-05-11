import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, FlatList, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/Components/Homepage'
import AddTaskScreen from './src/Components/AddTask'

const Tab = createBottomTabNavigator();

export default function App() { 
  let dispatch = useDispatch();

  useEffect(() => {
    console.log('In Fetch Tasks');
    dispatch({
      type: 'FETCH_TASKS'
    })
  });

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add" component={AddTaskScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

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
