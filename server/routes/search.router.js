const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios')
const router = express.Router();


router.get('/', (req, res) => {
axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}`)
  .then((response) => {
    res.send(response.data);
})
.catch(error => {
    res.sendStatus(500)
})
});

module.exports = router;