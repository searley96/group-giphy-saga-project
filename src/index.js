import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import logger from "redux-logger";
import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";

//create saga middleware
const sagaMiddleware = createSagaMiddleware();

//reducer
const giphys = (state = {}, action) => {
  if (action.type === "SET_GIPHS") {
    return action.payload;
  }
  return state;
  // switch (action.type) {
  //     case 'SET_GIPHS':
  //       return action.payload
  //     default:
  //       return state;
  //   }
};
const catergories = (state = {}, action) => {
  if (action.type === "SET_CAT") {
    return action.payload;
  }
  return state;
};

function* getGiphs() {
  try {
    const giphResponse = yield axios.get("/api/search");
    console.log("giph response", giphResponse);
    yield put({ type: "SET_GIPHS", payload: giphResponse.data });
  } catch (error) {
    console.log("Error fetching giphs", error);
  }
}
//TODO: sends axios.get to call the GIPHY APIpp
function* getCat() {
  try {
    const catResponse = yield axios.get(`/api/search/${action.payload}`);
    console.log("Inside getCat", catResponse);
    yield put({ type: "SET_CAT", payload: catResponse.data });
  } catch (error) {
    console.log("error", error);
  }
}

//TODO: POST: add gif to favorite page
function* postGiphs(action) {
  pp;
  console.log("insife postGiphs", action);
  try {
    yield axios.post("/api/favorite", action.payload);
    yield put({ type: "GET_GIPHS" });
  } catch (error) {
    console.log("inside post Giphs error", error);
  }
}
function* watcherSaga() {
  console.log("watcherSaga()");
  yield takeEvery("GET_GIPHS", getGiphs);
  yield takeEvery("GET_CAT", getCat);
  yield takeEvery("POST_GIPHS", postGiphs);
}

const store = createStore(
  combineReducers({
    giphys,
    catergories,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(watcherSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
