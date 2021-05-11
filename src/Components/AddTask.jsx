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

export default function AddTaskScreen() {

  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = () => {
    console.log('in Add. Text:', text);
    list.push(text)
    // setList([...list, text])
    setText('')
    console.log('list', list);
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Patrick's TODO List</Text>
      <Text style={styles.title}>Add a new Task</Text>
      <TextInput
        style={{height: 40}}
        placeholder="New Task"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Button title='Add' onPress={handleSubmit}/>
    </View>
  );
}

