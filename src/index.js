import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

//create saga middleware
const sagaMiddleware = createSagaMiddleware();



function* watcherSaga() {
    console.log("watcherSaga()")
}



  



  
  
  const store = createStore(
    combineReducers({ 
      
    }),
      // Add sagaMiddleware to our store
      applyMiddleware(sagaMiddleware, logger),
  );

  sagaMiddleware.run(watcherSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>
);
