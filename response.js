let http = require('http');


let server = http.createServer(function(request, response) {

  if(request.url === '/') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<h2>Home Page</h2>");  
    response.end();  
  }else if(request.url === '/about') {
    response.writeHead(200, {'Content-Type': 'text/html'});

    response.write("<h2>About Page</h2>");

    response.end();
   
  }else if(request.url === '/contact') {
    response.writeHead(200, {'Content-Type': 'text/html'});

    response.write("<h2>Contact Page</h2>");

    response.end();
  }else {
    response.writeHead(200, {'Content-Type': 'text/html'});

    response.write("<h2>404 Page Not Found</h2>");

    response.end();
  }


});

server.listen(4000);

console.log("Server running Success at http://localhost:4000/");