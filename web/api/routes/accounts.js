
'use strict';

// FIX THIS XSS

const express = require('express');
let router = express.Router();

const mongoose = require('mongoose')
const accounts_model = require('./../models/accounts')

router.post('/account/register', async (req, res) => {
    const body = req.body;

    const acc = new accounts_model(body)
    // basic authentication, i'm lazy & its 12am.
    acc.password = btoa(body.password)
    
    acc.save().then(() => {
        console.log("Saved!")

        const data = res.json({
            "status": 200,
            "message": "success",
        });
    }).catch(err => {
        console.error(err)
        const data = res.json({
            "status": 500,
            "message": err,
        });
    });
});

module.exports = router;