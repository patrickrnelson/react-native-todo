import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

import App from './App.js';


ReactDOM.render(
        <Provider store={storeInstance}>
          <App />
        </Provider>,
    document.getElementById('root')
);