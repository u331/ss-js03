const express = require('express');
const bodyParser  = require('body-parser');
const myLib = require('./myLib.js');

var app = express();
app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/init', function (req, res) {
    console.log("init");

    // myLib.getGenders();
    // console.log( myLib.getGenders() );
    let vvv = myLib.getGenders();
    console.log(vvv);

    res.send("hi, get, init");
} );

app.get('/', function (req, res) {
    console.log("geeet");
    res.end("hi, get, Hiii");
} );
app.post('/', function (req, res) {
    console.log(req.body);
    console.log(req.body.jsonData);
    let jsonData = req.body.jsonData;
    console.log(jsonData);
    // res.end("hi, post, Hiii");
    res.send("post data");
} );
app.post("/tst", function (req, res) {
    console.log(req.body);
    res.send("answer for tst");
    console.log(req.body.firstName);
});
app.put('/', function (req, res) {
    res.end("pUUUUUUuuut");
} );
app.delete('/', function (req, res) {
    res.end("del is del");
} );


app.listen(3030, function () {
    console.log('started');
})