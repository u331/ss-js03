const mysql = require("mysql2");

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "192.168.5.107",
    port: "3306",
    user: "tu19921",
    database: "testdb19921",
    password: "1"
}).promise();

function getGenders() {
    let out = [];

    pool.execute("SELECT * FROM `gender`")
        .then(result =>{
            // console.log(result[0][0].genderName);
            // for (let i = 0; i < result[0].length ; i++){}
            result[0].forEach( (el, i) =>{
                // console.log( el.genderName + " | " + i);
                out[i] = el.genderName;
                // console.log("m:" + out[0]);
            });
             pool.end();
        }).then(()=>{
        console.log("пул закрыт");
    }).then(()=>{
        console.log("m:" + out[0]);
        return out;
    }).catch(function(err) {
        console.log(err.message);
    });
    // console.log("m:" + out[0]);
    // return out;
}

module.exports = {
    getGenders: getGenders
};