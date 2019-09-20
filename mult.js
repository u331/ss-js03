const express = require("express");
const multer  = require("multer");

const app = express();

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "uploads");
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});

app.use(express.static(__dirname));

app.use(multer({storage:storageConfig}).single("filedata"));
app.post("/upload", function (req, res, next) {

    let filedata = req.file;
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");
});
app.listen(3030, ()=>{console.log("Server started");});