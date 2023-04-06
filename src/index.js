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

//reducer
const giphys = (state = {}, action) => {
    if (action.type === "SET_GIPHS") {
        return action.payload;
    }
    return state;
}

function* getGiphs() {
    try {
        const giphResponse = yield axios.get('/api/search')
        console.log('giph response', giphResponse)
        yield put ({ type: "SET_GIPHS", payload: giphResponse.data})
    } catch (error) {
        console.log('Error fetching giphs', error)
    }
};



function* watcherSaga() {
    console.log("watcherSaga()")
    yield takeEvery("GET_GIPHS", getGiphs)
}


const store = createStore(
    combineReducers({ 
      giphys,
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
