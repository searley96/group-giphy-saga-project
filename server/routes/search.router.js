const express = require("express");
const pool = require("../modules/pool");
const axios = require("axios");
const router = express.Router();

// router.get("/:q", (req, res) => {
//   let searchGif = req.params.q;
//   console.log("searchGif", searchGif);
// }
router.get('/:q'), (req, res) => {
  //needed the router to be able to speak the same lang
  //we used req.body- but because it's a part of req.body, we use a params
let searchGif = req.params.q;
console.log('params', searchGif)

// const params = {
//   api_key: process.env.GIPHY_API_KEY,
//   q: searchGif,
// };
//api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_AIP_KEY}&q=${searchGif}&limit=20
axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchGif}&limit=20`)
  .then((response) => {
    console.log('are we getting this?', response)
    res.send(response.data);
})
.catch(error => {
  console.log('insde api GET', error)
    res.sendStatus(500)
})
};

module.exports = router;
