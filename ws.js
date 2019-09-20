const http = require('http');

http.createServer(function (req, res) {
    res.setHeader("Content-Type","text/html; charset=utf-8");
    console.log(req.method);
    // req.on('data',function (data) {
    //     console.log(data);
    // });
    res.end("Hi, <b>Jude</b>");
}).listen(3030);

// http.get("http://127.0.0.1:3030", function (req, res) {
//     res.send('fc');
// })

// http.get('/', function (req, res) {
//         //res.end("hihi");
//     }
// );