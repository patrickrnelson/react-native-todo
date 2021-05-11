import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    width: '100%'
  },
  mainTitle: {
    fontSize: 30,
    marginTop: 70,
  },
  title: {
    fontSize: 26,
    marginTop: 80,
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

export default function HomeScreen() {

  const [isEnabled, setIsEnabled] = useState(false);
  const [list, setList] = useState([]);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Patrick's TODO List</Text>
      
      <Text style={styles.title}>My Tasks</Text>

      <FlatList
        style={styles.listView}
        data={list}
        renderItem={({item}) => 
        <View style={styles.listItem}> 
          <Text style={styles.item}>{item}</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
          }
      />
    </View>
  );
}

