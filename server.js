const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const sms = require('./sms');

const app = express();


app.listen(5000, function () {
    console.log('listening on 5000')
})

app.use(cors());
app.use(express.static(path.join(__dirname, './pf1/build/')));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './pf1/buld/index.html'));
});

app.post('/sendSMS', (req, res) => {
    sms(req.body.phone, req.body.content);
})