import axios from 'axios'

export const fetchTasks = () => {
  return (dispatch) => {
    // dispatch(fetchUsersRequest())
    axios
      .get('http://172.20.10.4:5000/api/task')
      .then(response => {
        // response.data is the users
        const tasks = response.data
        dispatch(setTasks(tasks))
      })
      .catch(error => {
        // error.message is the error message
        // dispatch(fetchUsersFailure(error.message))
        console.log('error fetching tasks', error.message)
      })
  }
}

export const addTask = () => {
  return(dispatch, getState) => {
    const newTask = getState().newTaskReducer
    console.log('newTask', newTask)
    axios
      .post('http://172.20.10.4:5000/api/task', {'newTask': newTask})
      .then(response => {
        console.log('POST success', response)
        dispatch(fetchTasks())
      })
      .catch(error => {
        console.log('Error in POST', error.message);
      })
  }
}

// export const addTask = () => async(dispatch, getState) => {
//   const newTask = getState().newTaskReducer;
//   console.log('newTask', newTask);
//   await fetch('http://172.20.10.4:5000/api/task', {
//     // console.log('newTask', text);
//     // dispatch(fetchUsersRequest())
//     method: 'POST',
//     body: newTask
//   })
//   dispatch(fetchTasks())
// }

export const setTasks = tasks => {
  return {
    type: 'SET_TASKS',
    payload: tasks
  }
}

export const newTask = task => {
  return {
    type: 'NEW_TASK',
    payload: task
  }
}