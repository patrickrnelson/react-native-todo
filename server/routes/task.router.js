const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('In GET all tasks endpoint');
  pool.query('SELECT * FROM "tasks"')
    .then((result) => {
      res.send(result.rows)
    })
    .catch((err) => {
      console.log('Error in GET all')
      res.sendStatus(500)
    })
  }
)

module.exports = router;