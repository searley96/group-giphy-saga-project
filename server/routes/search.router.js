const express = require("express");
const pool = require("../modules/pool");
const axios = require("axios");
const router = express.Router();




// SELECT * FROM favorite 
// JOIN favorite_catergory ON favorite.id = favorite_category.favorite_id;
// JOIN category ON category.id = favorite_category.category_id;
// WHERE favorite.id= ${req.params.id};


router.get("/:searchTerm ", (req, res) => { //:q
  //:q is data we are passing along in our route
  // let searchGif = req.params.seachTerm;
  console.log("searchGif", searchGif);

  
  axios
    .get(`https://api.giphy.com/v1/gifs/search?`, {
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
    }})
  // }
  // axios
  //   .get(
  //     `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}`
  //   )
  //   .then((response) => {
  //     res.send(response.data);
  //   })
  //   .catch((error) => {
  //     res.sendStatus(500);
  //   });

}
module.exports = router;
