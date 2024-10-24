let fs = require('fs');
let http = require('http');


let server = http.createServer(function(request, response) {

    if(request.url === '/') {
        
        //Async
        fs.readFile('home.html', function(error, data) {

            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            response.end();
        });
    }

});


server.listen(4040);

console.log("Server running Success at http://localhost:4040/");