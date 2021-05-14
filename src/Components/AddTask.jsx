// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';

import { newTask } from '../../redux/task/taskActions'
import { addTask } from '../../redux/task/taskActions'

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

// const mapDispatchToProps = (newTask) => {
//   return {
//     addTask: addTask(newTask)
//   }
// }

function AddTaskScreen({navigation}) {
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const handleSubmit = (task) => {
    console.log('in Add. Text:', task);
    dispatch(newTask(task));
    dispatch(addTask());
    setText('')
    navigation.navigate('Home')
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
      <Button title='Add' onPress={() => handleSubmit(text)}/>
    </View>
  );
}

export default AddTaskScreen;

