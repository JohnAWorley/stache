const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('in seen router post', req.user, req.body);
    let queryText =
        `WITH "piece" AS(INSERT INTO "piece" ("person_id", "comment", "object_id",  "picture_url", "title")
        VALUES ($1, $2, $3, $4, $5) RETURNING "id")
        INSERT INTO "seen_list"("piece_id")
        SELECT "id" FROM "piece"`;
    pool.query(queryText, [req.user.id, req.body.comment, req.body.id, req.body.picture, req.body.title])
        .then(result => {
            res.sendStatus(201);
        }).catch(error => {
            console.log('error in add item post:', error);
            res.sendStatus(500);
        })
});

router.get('/', rejectUnauthenticated, (req, res) => {
    console.log(req.user.id);
    
    const queryString = `SELECT "piece"."title", "piece"."picture_url", "piece"."object_id", "piece"."comment", "seen_list"."location", "seen_list"."date"
                        FROM "piece" JOIN "person"
                        ON "person"."id" = "piece"."person_id"
                        JOIN "seen_list"
                        ON "seen_list"."piece_id" = "piece"."id"
                        WHERE "piece"."person_id" = $1;`;
    pool.query(queryString, [req.user.id])
        .then((result) => {
            console.log(result.rows);
            res.send(result.rows);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);
        });
});

module.exports = router;

