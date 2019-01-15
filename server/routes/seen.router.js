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



module.exports = router;


// WITH "person" AS(INSERT INTO "person"
//     ("username", "password", "full_name",
//         "email", "img_avatar", "description")
//                  VALUES($1, $2, $3, $4, $5, $6) RETURNING "id")
// INSERT INTO "blog"("person_id")
// SELECT "id" FROM "person";