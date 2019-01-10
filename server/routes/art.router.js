const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');



router.get('/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    
    axios.get(`https://api.harvardartmuseums.org/object/`, {
        params: {
            apikey: `${process.env.HARVARD_API_KEY}`,
            title: `${id}`,
            fields: "objectnumber,title,dated,primaryimageurl"
        }
    }).then(response => {
            console.log('woot');
            console.log(response.data);
            res.send(response.data);
        }).catch(error => {
            console.log('Error:', error);
            res.sendStatus(500);
        })
})

module.exports = router;