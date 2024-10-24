let fs = require('fs');
let http = require('http');


let server = http.createServer(function(request, response) {

    if(request.url === '/') {
        
        //Async
        // fs.readFile('home.html', function(error, data) {

        //     response.writeHead(200, {'Content-Type': 'text/html'});
        //     response.write(data);
        //     response.end();
        // });

        //Sync
        // let dataSync = fs.readFileSync('home.html');
        // response.writeHead(200, {'Content-Type': 'text/html'});
        // response.write(dataSync);
        // response.end();


        // Async
        // fs.writeFile('hello.txt', 'Hello World from Node.js', function(error) {
        //     if(error) {
        //         response.writeHead(404, {'Content-Type': 'text/html'});
        //         response.write("File Not Found");
        //         response.end();
        //     }else {
        //         response.writeHead(200, {'Content-Type': 'text/html'});
        //         response.write("File Created Successfully");
        //         response.end();
        //     }
        // });

        // Sync
        // fs.writeFileSync('helloSyncs.txt', 'Hello World from Node.js with Sync', function(error) {
        //     if(error) {
        //         response.writeHead(404, {'Content-Type': 'text/html'});
        //         response.write("File Not Found");
        //         response.end();
        //     }else {
        //         response.writeHead(200, {'Content-Type': 'text/html'});
        //         response.write("File Created Successfully");
        //         response.end();
        //     }
        // });


        // Sync
        // fs.rename('helloSyncs.txt', 'demo2.text', function(error) {
        //     if(error) {
        //         response.writeHead(404, {'Content-Type': 'text/html'});
        //         response.write("File Not Found");
        //         response.end();
        //     }else {
        //         response.writeHead(200, {'Content-Type': 'text/html'});
        //         response.write("File Renamed Successfully");
        //         response.end();
        //     }
        // })

        // Async for file delete
        // fs.unlink('demo2.text', function(error) {
        //     if(error) {
        //         response.writeHead(404, {'Content-Type': 'text/html'});
        //         response.write("File Not Found");
        //         response.end();
        //     }else {
        //         response.writeHead(200, {'Content-Type': 'text/html'});
        //         response.write("File Deleted Successfully");
        //         response.end();
        //     }
        // });


      let result =  fs.existsSync('hello.txt');

      if(result) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write("File Exists");
        response.end();
      }else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.write("File Not Found");
        response.end();
      }

    }

});


server.listen(4050);

console.log("Server running Success at http://localhost:4050/");