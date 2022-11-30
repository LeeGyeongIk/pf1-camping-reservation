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

app.get('/getNotice', function (req, res) {
    const fs = require('fs');
    fs.readFile('./notice.json', (err, data) => {  // 파일 읽기
        if (err) throw err

        const rowData = JSON.parse(data);
        res.send(rowData);
    });
});

app.post('/sendSMS', (req, res) => {
    sms(req.body.phone, req.body.content);
})