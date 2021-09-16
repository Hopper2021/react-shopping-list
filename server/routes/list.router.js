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

//PUT
router.put('/:id', (req,res) =>{
    console.log('in /list PUT');
    console.log('req.params is', req.params );
    const itemId = req.params.id;
    let queryText =`UPDATE "shopping-list" SET "purchased" = 'true' WHERE id = $1;`;
    pool.query(queryText, [itemId]).then((result) =>{
        res.sendStatus(200);
    }).catch((error) =>{
        console.log('error with PUT /list');
        res.sendStatus(500);
    })
})

module.exports = router;