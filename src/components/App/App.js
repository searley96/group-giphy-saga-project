import React from 'react';
import GiphySearch from './GiphySearch/GiphySearch';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import FavoriteGifs from '../FavoriteGifs/FavoriteGifs';

function App() {

const giphys = useSelector(store => store.giphys);
const [search, setSearch] = useState('')


// const catergories = useSelector(store => store.catergories);

  function getCatergories() {
    dispatch({ type: "GET_CAT" });
  }

function getGiphs() {
  dispatch({ type: "GET_GIPHS", payload: search })
}

// function getCatergories() {
//   dispatch({ type: "GET_CAT" })
// }

// useEffect(() => {
//   getGiphs()
// }, []);

function handleClick(){
  console.log('event happened')
  getGiphs();
  setSearch('')
}

  return (
    <div>
      <h1>Giphy Search!</h1>
      {/* <pre>{JSON.stringify(catergories)}</pre> */}
      {/* {catergories.map((cat)=> {
        return (
          <GiphySearch key={cat.id} catList={cat}/>
        )
       
      })} */}
    {/* <form onSubmit={getGiphs}>
      <input placeholder="search a Gif!" type="text" value={gifSearch} onChange={handleNewSearch} /> 
      <button type="submit">Favorite</button>
      </form> */}
<input placeholder="Search a Gif!" type="text" value={search} onChange={() => setSearch(event.target.value)} />
  
<button onClick={handleClick}>Click to Get a Gif</button>

<img src={giphys.data}/> 
    </div>
  );
}

export default App;
