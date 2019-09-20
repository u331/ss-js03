const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "192.168.5.107",
    user: "root",
    database: "usersdb",
    password: "пароль_от_сервера"
});
connection.connect(function(err){
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else{
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});