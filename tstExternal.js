const mysql = require("mysql2");

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "192.168.5.107",
    port: "3306",
    user: "tu19921",
    database: "testdb19921",
    password: "1"
}).promise();

pool.execute("SELECT * FROM `gender`") // изменение объектов
    .then(result =>{
        console.log(result[0]);
        pool.end();
    }).then(()=>{
        console.log("пул закрыт");
    }).catch(function(err) {
        console.log(err.message);
});