const express = require('express');
const bodyParser  = require('body-parser');
// const myLib = require('./myLib.js');
const mysql = require("mysql2");

var app = express();
app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const managerOcupationId = 3;

const pool = mysql.createPool({
    connectionLimit: 15,
    host: "192.168.5.107",
    port: "3306",
    user: "tu19921",
    database: "testdb19921",
    password: "1"
}).promise();

app.get('/init', function (req, res) {
    let out = {'genders': [], 'ocupations': [],
        'experiance': [], 'managers': [], 'users' : []};
    console.log("init");

    pool.execute("SELECT * FROM `gender`")
        .then(result =>{
            result[0].forEach( (el, i) =>{
                out["genders"][i] = el.genderName;
            });
            return pool.execute("SELECT * FROM `ocupation`");
        })
        .then(result => {
            result[0].forEach( (el, i) =>{
                out["ocupations"][i] = el.ocupationName;
            });
            return pool.execute("SELECT * FROM `experiance`");
        })
        .then(result => {
            result[0].forEach( (el, i) =>{
                out["experiance"][i] = el.experianceVal;
            });
            console.log("mgr:" + managerOcupationId);
            return pool.query("SELECT `id`, `firstName`, `secondName` FROM `workers` WHERE `ocupationId` = 3"/*, [managerOcupationId]*/);
        })
        .then(result => {
            result[0].forEach( (el, i) =>{
                // out["users"][i] = el.secondName;
                out["managers"][i] = {};
                out["managers"][i]['id'] = el.id;
                out["managers"][i]['firstName'] = el.firstName;
                out["managers"][i]['secondName'] = el.secondName;
            });
            return pool.execute("SELECT * FROM `tab01`");
        })
        .then(result => {
            result[0].forEach( (el, i) =>{
                // out["users"][i] = el.secondName;
                out["users"][i] = {};
                out["users"][i]['id'] = el.id;
                out["users"][i]['firstName'] = el.firstName;
                out["users"][i]['secondName'] = el.secondName;
                out["users"][i]['rem'] = el.rem;
            });
        })
        .then(()=>{
            res.send(out);
            pool.end();
        })
        .then(()=>{
            console.log("pool closed");
        })
        .catch(function(err) {
            console.log(err.message);
        });
    // res.send("hi, get, init");
});

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

app.post("/add", function (req, res) {

    let sql="INSERT INTO `workerstmp`(`firstName`,`secondName`,`genderId`,`langEn`,`langNonEn`,`ocupationId`,`salary`,`experianceId`,`coefficient`,`managerId`) VALUES (?,?,?,?,?,?,?,?,?,?)";
    let values = [req.body.firstName, req.body.secondName, req.body.genderId, req.body.langEn, req.body.langNonEn, req.body.ocupationId ,req.body.salary ,req.body.experianceId ,req.body.coefficient ,req.body.managerId];
    pool.execute(sql, values)
        .catch(function(err) {
            console.log(err.message);
        });

    console.log(req.body);
    res.send("answer for ADD");
    // console.log(req.body.firstName);
    console.log("ADD");
    // console.log(req.body);


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