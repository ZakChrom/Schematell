const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env['DB_URI'];

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("Connected to database")
}).catch(err => {
    console.error(err)
})