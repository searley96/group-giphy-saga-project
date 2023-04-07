const express = require("express");
const pool = require("../modules/pool");
const axios = require("axios");
const router = express.Router();

router.get("/:q", (req, res) => {
  let searchGif = req.params.q;
  console.log("searchGif", searchGif);

  const params = {
    api_key: process.env.GIPHY_API_KEY,
    q: searchGif,
  };
  axios
    .get(`https://api.giphy.com/v1/gifs/search?`, { params })
    .then((response) => {
      res.send(response.data.data);
    })
    .catch((error) => {
      console.log("Error in Giphy Search GET server side", error);
    });
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
});

module.exports = router;
