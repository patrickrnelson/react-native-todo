import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_tasks', fetchAllTasks);
}

function* fetchAllTasks() {
  // get all movies from the DB
  try {
      const tasks = yield axios.get('/api/task');
      console.log('get all:', tasks.data);
      yield put({ type: 'SET_TASKS', payload: movies.data });

  } catch {
      console.log('get tasks error');
  }
      
}

const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const tasks = (state = [], action) => {
  switch (action.type) {
      case 'SET_TASKS':
          return action.payload;
      default:
          return state;
  }
}

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
      tasks,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);