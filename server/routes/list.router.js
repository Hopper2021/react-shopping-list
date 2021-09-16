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

//POST
router.post('/', (req, res) => {
    console.log(req.body);
    let newList = req.body;
    console.log('adding item to list', newList);
    const queryText = `
        INSERT INTO "shopping-list" ("name", "quantity", "unit")
        VALUES ($1, $2, $3);
    `;
    pool.query(queryText, [
        newList.name,
        newList.quantity,
        newList.unit,
    ]).then((result) => {
        console.log('POST new list success!');
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in POST', error);
        res.sendStatus(500);
    }); 
});

module.exports = router;