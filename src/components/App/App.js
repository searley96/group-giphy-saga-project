import React from "react";
import GiphySearch from "./GiphySearch/GiphySearch";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import FavoriteGifs from "../FavoriteGifs/FavoriteGifs";

function App(props) {
  const dispatch = useDispatch();

  const giphys = useSelector((store) => store.giphys);
  const catergories = useSelector((store) => store.catergories);

  // function getGiphs() {
  //   dispatch({ type: "GET_GIPHS" })
  // }

  function getCatergories() {
    dispatch({ type: "GET_CAT" });
  }

  useEffect(() => {
    // getGiphs(),
    getCatergories();
  }, []);

  return (
    <div>
      <h1>Giphy Search!</h1>
      <pre>{JSON.stringify(catergories)}</pre>
      {/* {catergories.map((cat)=> {
        return (
          <GiphySearch key={cat.id} catList={cat}/>
        )
       
      })} */}
      <button>Favorite</button>
    </div>
  );
}

export default App;
