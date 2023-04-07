import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";

function GiphySearch() {
  const giphys = useSelector((store) => store.giphys);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const getGiphs = () => {
    dispatch({
      type: "GET_GIPHS",
      payload: search,
    });
  };
  ("");
  // ADD gif to favorite page:
  const FavoriteGifs = (url) => {
    dispatch({
      type: "GET_CAT",
      payload: url,
    });

    const onMouseEnter = (event) => {
      event.target.classList.add("hover");
    };
    const onMouseLeave = () => {
      let images = document.getElementsByClassName("image");

      for (let image of images) {
        image.classList.remove("hover");
      }
    };
  };
  return (
    <>
      <div className="seachInput">
        <h2> Search Page </h2>
        <input
          onChange={(event) => setSearch(event.target.value)}
          type="text"
          placeholder="search"
        />
        <button onClick={getGiphs}>Seach Gifs </button>
        {/* <span>{props.cat.name}</span>  */}
      </div>
      <div className="imageItems">
        {gifs.map((gif, i) => {
          return (
            <div className="gifItem" onMouseLeave={onMouseLeave} key={i}>
              <img
                className="favorite image"
                onMouseEnter={onMouseEnter}
                src={gif.images.original.url}
              />
              <div>
                <button
                  id={gif.images.original.url}
                  onClick={() => FavoriteGifs(gif.images.orginal.url)}
                >
                  Favorite
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default GiphySearch;
