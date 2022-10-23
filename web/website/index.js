const express = require('express')
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

const cors = require('cors');

const static_path = path.join(__dirname, './public');

app.use(express.static(path.join(static_path)), cors());

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
})

app.get('/', function(req, res) {
    res.sendFile(path.join(static_path, 'index.html'));
});

app.get('/status', (req,res) => {
    res.json({
        "status": res.statusCode
    })
});

app.get('*', function(req, res){
    res.status(404).send(`<style>@import url("https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/cascadia-code.min.css"); * {font-family: 'Cascadia Code', monospace} html { background-color: #000000 } </style><p style="text-align:center;color: #ffffff;font-size:4rem;vertical-align: middle;">what are you trying to do? 404 dude, nothing is here. go play the game. go.</p>`);
});

app.listen(port, () => {
    console.log(`Server is ready~~\nhttp://localhost:${port}`)
});