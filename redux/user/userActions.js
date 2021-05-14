import axios from 'axios'

export const fetchUsers = () => {
  return (dispatch) => {
    // dispatch(fetchUsersRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // response.data is the users
        const users = response.data
        dispatch(setUsers(users))
      })
      .catch(error => {
        // error.message is the error message
        // dispatch(fetchUsersFailure(error.message))
        console.log('error fetching users', error.message)
      })
  }
}

export const setUsers = users => {
  return {
    type: 'SET_USERS',
    payload: users
  }
}