

var http = require("http");
http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "test/html" });
    res.write("<h2>Hola Mundo</h2>>");
    res.end("");
}).listen(8000);

console.log('El servidor web implementado se encuentra en la dirección 127.0.0.1:8000');