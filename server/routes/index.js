var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const survey = require("../schema/Survey.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST survey data */
router.post('/api/survey', async (req, res) => {
    const { location, dateRange, groupSize } = req.body;

    const newSurvey = new survey({
        location,
        dateRange,
        groupSize,
    });

    try {
        await newSurvey.save();
        print("done")
        res.status(201).send('Survey data saved successfully');
    } catch (error) {
        res.status(500).send('Error saving survey data');
    }
});

module.exports = router;