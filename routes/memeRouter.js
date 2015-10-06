var express = require('express');
var jsonData = require('../model/data.json');
var router = express.Router();

// send JSON data to Jade template
router.get('/', function(req, res) {
    res.render('memesJadeFile', { memeTemplate : jsonData });
});

// send JSON data to Angular controller
router.get('/json', function(req, res) {
    res.send(jsonData);
});

module.exports = router;