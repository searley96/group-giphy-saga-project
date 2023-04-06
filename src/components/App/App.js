import React from 'react';
import GiphySearch from './GiphySearch/GiphySearch';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App(props) {

const dispatch = useDispatch();

const giphys = useSelector(store => store.giphys);

function getGiphs() {
  dispatch({ type: "GET_GIPHS" })
}

useEffect(() => {
  getGiphs()
}, []);

  return (
    <div>
      <h1>Giphy Search!</h1>
      <GiphySearch/>
    </div>
  );
}

export default App;
