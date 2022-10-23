'use strict';

const express = require('express');
let router = express.Router();

const mongoose = require('mongoose')
const mods_model = require('./../models/mods')

router.post('/mods/post', (req, res) => {
    const body = req.body;

    const mod = new mods_model(body)
    
    mod.save().then(() => {
        console.log("Account registered!")

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

router.get('/mods/get/:id', async function(req,res, next) {
    const { id } = req.params;

    console.log(id)

    if (!id){
        res.status(418).send({message: "No id provided"})
        console.log("No id provided")
    }

    const mod = await mods_model.findOne({mod_id: id})

    console.log("Mod data: " + JSON.stringify(mod))

    const data = res.json({
        "status": 200,
        "data": mod
    })
});

module.exports = router;