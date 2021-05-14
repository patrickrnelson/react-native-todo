import { combineReducers } from 'redux'
import userReducer from './user/userReducer'
import taskReducer from './task/taskReducer'
import newTaskReducer from './task/newTaskReducer'

const rootReducer = combineReducers({
  userReducer,
  taskReducer,
  newTaskReducer
})

export default rootReducer