const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');



router.get('/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);

    axios.get(`https://iiif.harvardartmuseums.org/manifests/object/${id}?apikey=${process.env.HARVARD_API_KEY}`
    ).then(response => {
        console.log('in fetch single piece');
        console.log(response.data);
        res.send(response.data);
    }).catch(error => {
        console.log('Error:', error);
        res.sendStatus(500);
    })
})

module.exports = router;