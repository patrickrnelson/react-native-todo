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

router.post('/', (req, res) => {
  console.log('In POST new task endpoint. req.body:', req.body);
  pool.query('INSERT INTO "tasks" ("name") VALUES ($1)', [req.body.newTask])
    .then((result) => {
      res.sendStatus(201)
    })
    .catch((err) => {
      console.log('Error in POST new task');
      res.sendStatus(500)
    })
})

module.exports = router;