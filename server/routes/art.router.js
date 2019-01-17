const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');



router.get('/title/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);

    axios.get(`https://api.harvardartmuseums.org/object/`, {
        params: {
            apikey: `${process.env.HARVARD_API_KEY}`,
            title: `${id}`,
            fields: "objectnumber,title,dated,primaryimageurl"
        }
    }).then(response => {
        console.log('in response of object search');
        console.log(response.data);
        res.send(response.data);
    }).catch(error => {
        console.log('Error:', error);
        res.sendStatus(500);
    })
}); 

router.get('/artist/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);

    axios.get(`https://api.harvardartmuseums.org/object/`, {
        params: {
            apikey: `${process.env.HARVARD_API_KEY}`,
            person: `${id}`,
            fields: "objectnumber,title,dated,primaryimageurl"
        }
    }).then(response => {
        console.log('in response of object search');
        console.log(response.data);
        res.send(response.data);
    }).catch(error => {
        console.log('Error:', error);
        res.sendStatus(500);
    })
});

router.get('/category/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);

    axios.get(`https://api.harvardartmuseums.org/object?classification=${id}`, {
        params: {
            apikey: `${process.env.HARVARD_API_KEY}`,
            fields: "objectnumber,title,dated,primaryimageurl"
        }
    }).then(response => {
        console.log('in response of object search');
        console.log(response.data);
        res.send(response.data);
    }).catch(error => {
        console.log('Error:', error);
        res.sendStatus(500);
    })
});


router.get('/culture/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);

    axios.get(`https://api.harvardartmuseums.org/object?culture=${id}`, {
        params: {
            apikey: `${process.env.HARVARD_API_KEY}`,
            fields: "objectnumber,title,dated,primaryimageurl"
        }
    }).then(response => {
        console.log('in response of object search');
        console.log(response.data);
        res.send(response.data);
    }).catch(error => {
        console.log('Error:', error);
        res.sendStatus(500);
    })
});

router.get('/worktype/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);

    axios.get(`https://api.harvardartmuseums.org/object?worktype=${id}`, {
        params: {
            apikey: `${process.env.HARVARD_API_KEY}`,
            fields: "objectnumber,title,dated,primaryimageurl"
        }
    }).then(response => {
        console.log('in response of object search');
        console.log(response.data);
        res.send(response.data);
    }).catch(error => {
        console.log('Error:', error);
        res.sendStatus(500);
    })
});


module.exports = router;