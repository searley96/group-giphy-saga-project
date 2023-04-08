import { useDispatch } from "react-redux";

function GifItem({ gif }) {
  const dispatch = useDispatch();

  const onFavorite = () => {
    // need to get this to the server, so use a saga
    dispatch({
      // purpose of this dispatch is to send type to a server into a SAGA
      type: "CREATE_FAVORITE",
      payload: gif,
    });
  };

  return (
    <li>
      <img src={gif.image_url} />
      <button onClick={onFavorite}>❤️‍🔥</button>
    </li>
  );
}

export default GifItem;
