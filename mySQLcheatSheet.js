const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "192.168.5.107",
    port: "3306",
    user: "tu19921",
    database: "testdb19921",
    password: "1"
});

// тестирование подключения
connection.connect(function(err){
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else{
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

connection.query("SELECT * FROM `gender`",
    function(err, results, fields) {
        //console.log(err);
        console.log(results); // собственно данные
        // console.log(fields); // мета-данные полей
        console.log(results.length);
        for (let i = 0; i < results.length; i++){
            console.log( results[i].genderName );
        }
    });

/*
connection.execute("INSERT INTO `tab01`(`firstName`, `secondName`, `rem`) VALUES('Marcelo', 'Mastroyani', 'actor')",
    function(err, results, fields) {
        // console.log(err);
        console.log(results); // собственно данные
        // console.log(fields); // мета-данные полей
});
*/

/*
const user = ["Tom", "Hanks" , 29];
const sql = "INSERT INTO `tab01`(`firstName`, `secondName`, `rem`) VALUES(?, ?, ?)";
connection.query(sql, user, function(err, results) {
    if(err) console.log(err);
    else console.log("Данные добавлены");
});
*/

// закрытие подключения
connection.end(function(err) {
    if (err) {
        return console.log("Ошибка: " + err.message);
    }
    console.log("Подключение закрыто");
});