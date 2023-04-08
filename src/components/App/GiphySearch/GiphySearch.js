import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import GifItem from "../GifItem/GifItem";
import { useEffect } from "react";

function Search() {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const gifList = useSelector((store) => store.gifList);

  useEffect(() => {
    dispatch({
      type: "CLEAR_GIF_LIST",
    });

    // axios.get no - use a saga
  }, []);

  const onSearch = (evt) => {
    evt.preventDefault();

    // starting the process to find gifs
    // this object IS the action on the saga function
    dispatch({
      type: "SEARCH_FOR_GIFS",
      payload: searchInput, // speaking to function* in index.js file
    });
  };

  return (
    <>
      <h1>Find a GIF 🔍</h1>

      <form onSubmit={onSearch}>
        <input
          type="text"
          value={searchInput}
          onChange={(evt) => setSearchInput(evt.target.value)}
        />
        <input type="submit" value="Find that gif 👁️" />
      </form>

      <h2>Results</h2>
      <ul>
        {gifList.map((item) => (
          <GifItem key={item.image_url} gif={item} />
        ))}
      </ul>
    </>
  );
}

export default Search;
