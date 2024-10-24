let http = require('http');
let URL = require('url');


let server = http.createServer(function(request, response) {

    let myURL = "http://rabbil.com/blog/html?year=2020&month=july"
    
   let MyURLObject = URL.parse(myURL, true);

   let myHostName = MyURLObject.host;
   let myPathName = MyURLObject.pathname;
   let mySearch = MyURLObject.search;


   response.writeHead(200, {'Content-Type': 'text/html'});
   response.write("HostName: " + myHostName + "<br>");
   response.write("PathName: " + myPathName + "<br>");
   response.write("Search: " + mySearch + "<br>");
   response.end();

});

server.listen(5050);

console.log("Server running Success at http://localhost:5050/");