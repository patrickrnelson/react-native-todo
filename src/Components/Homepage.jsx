// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Button, CheckBox, FlatList, StyleSheet, Text, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

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
    justifyContent: 'space-between',
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

  const [isSelected, setSelection] = useState(false);

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Patrick's TODO List</Text>
      
      <Text style={styles.title}>My Tasks</Text>

      <FlatList
        style={styles.listView}
        data={taskData}
        renderItem={({item}) => 
        <View style={styles.listItem}> 
          <Text style={styles.item} key={item.id}>{item.name}</Text>
          <BouncyCheckbox
            key={item.id}
            isChecked={item.isCompleted}
            onValueChange={setSelection} // We will need to make an update to the DB
            style={styles.checkbox}
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

