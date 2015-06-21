// usage: node example2.js
// navigate to: http://localhost:8000

var http = require("http"),
    fs = require("fs"),
    server;

server = http.createServer(function (req, res) {
    fs.createReadStream(__dirname + "/data.txt").pipe(res);
});

server.listen(8000);
