var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ctrlasktheExpert = require('../controllers/asktheexpert.controllers');
var ctrlCareers = require('../controllers/careers.controllers');
var ctrlContactus = require('../controllers/contactus.controllers');

//ask the expert routes 
router
    .route('/vdops/asktheexpert')
    .post(ctrlasktheExpert.asktheExpert)
//careers routes
router
    .route('/vdops/careers')
    .post(ctrlCareers.careersApply)
//contactus routes 
router
    .route('/vdops/contactus')
    .post(ctrlContactus.contactUs)

module.exports = router;