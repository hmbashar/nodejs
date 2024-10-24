let http = require('http');


let server = http.createServer(function(request, response) {

    response.end("Hello World");
});

server.listen(3000);

console.log("Server running Success at http://localhost:3000/");