const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.get('/', (req, res) => {
    let queryText = 'SELECT * from "shopping-list"';

    pool.query(queryText).then((result) => {
        console.log("IN GET REQUEST", result.rows);
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});

module.exports = router;