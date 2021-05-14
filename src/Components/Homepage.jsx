// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Button, FlatList, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

import { fetchTasks } from '../../redux/task/taskActions'

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

const mapStateToProps = state => {
  return {
    taskData: state.taskReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: () => dispatch(fetchTasks())
  }
}

function HomeScreen({taskData,fetchTasks}) {

  const [isEnabled, setIsEnabled] = useState(false);
  const [list, setList] = useState([]);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    fetchTasks()
  }, [])

  const handleGetTasks = () => {
    console.log('taskData', taskData);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Patrick's TODO List</Text>
      
      <Text style={styles.title}>My Tasks</Text>

      <Button title="Get Tasks" onPress={handleGetTasks} />

      <FlatList
        style={styles.listView}
        data={taskData}
        renderItem={({item}) => 
        <View style={styles.listItem}> 
          <Text style={styles.item} key={item.id}>{item.name}</Text>
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


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)

