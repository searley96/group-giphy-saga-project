const express = require('express');
const pool = require('../modules/pool');
import axios from 'axios';

const router = express.Router();

router.get('/', (req, res) => {

  axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}`)
  .then((response) => {
    res.send(response.data);
})
.catch(error => {
    res.sendStatus(500)
})
  // return all categories
  const queryText = `SELECT * FROM category ORDER BY name ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});



module.exports = router;
