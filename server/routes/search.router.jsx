const express = require("express");
const axios = require("axios");
const router = new express.Router();

// GET all the info for 1 singe Favorite, including its categories
router.get("/singleFavorite/:id", (req, res) => {
  /*
    const queryText = `SELECT * FROM favorite
JOIN favorite_category ON favorite.id = favorite_category.favorite_id
JOIN category ON category.id = favorite_category.category_id
WHERE favorite.id = ${req.params.id}`;
*/


router.get("/:searchTerm", (req, res) => {
  // axios request to the giphy api
  //:q is data we are passing along in our route
  // let searchGif = req.params.seachTerm;
  console.log("search query is", req.params.searchTerm);
  // name=value&name=value
  axios.get`https://api.giphy.com/v1/gifs/search?`, {
     params: {
      api_key: process.env.GIPHY_API_KEY,
      q: req.params.seachTerm,
      limit: 10,
      rating: 'pg',
    },
  .then((apiRes) => {
    let dataToSend = apiRes.data.data.map((item) => {
      return {
        image_url: item.images.downsized.url,
        title: item.title,
      }
    })
    res.send(dataToSend);
  })
  .catch((error) => {
    if(error.response) {
      console.error('Gipghy api err' , error.response.data);
    } else {
    console.log("Error in Giphy Search GET server side", error);
    }
})},
  
})
module.exports = router;
