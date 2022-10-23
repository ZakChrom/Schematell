// Imports

const express = require('express');
const mongoose = require('mongoose')
const rateLimit = require('express-rate-limit')
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per window's
    standardHeaders: true,
    legacyHeaders: false
})

// Variables
const app = express();
const cors = require('cors');
const port = 4040;
require('dotenv').config()

// Schemas
const mods_model = require('./models/mods')

// Environment Vars
const uri = process.env['DB_URI'];

// Routes
const modRouter = require('./routes/mods');
const accountRouter = require('./routes/accounts');

app.use(
    express.json(),
    cors(),
    modRouter,
    accountRouter,
    limiter
);

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});

app.get('/status', (req,res) => {
    res.json({
        "status": res.statusCode
    })
});

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("Connected to database")
}).catch(err => {
    console.error(err)
})

app.listen(
    port,
    () => console.log(`API listening on port ${port}!`)
);