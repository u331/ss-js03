const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "192.168.5.107",
    port: "3306",
    user: "tu19921",
    database: "testdb19921",
    password: "1"
});

function getGenders() {
    let out = [];

    connection.connect(function(err){
        if (err) {
            return console.error("Error: " + err.message);
        }
        else{
            console.log("MySQL connection OK");
        }
    });

    connection.query("SELECT * FROM `gender`",
        function(err, results, fields) {
            // let out = [];
            // console.log(results);
            // console.log(results.length);
            // for (let i = 0; i < results.length; i++){
            //     console.log( results[i].genderName );
            // }
            results.forEach((el, i) => {
                out[i] = el.genderName;
                // console.log(el.genderName);
            })
            console.log(out);
            return out;
    });

    connection.end(function(err) {
        if (err) {
            return console.log("Ошибка: " + err.message);
        }
        console.log("Подключение закрыто");
    });
    // return out;
}

module.exports = {
    getGenders: getGenders
};