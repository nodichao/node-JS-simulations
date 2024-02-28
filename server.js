var http = require('http');

http.createServer(function(request,response){
   response.write('<h1>Hello World !</h1>');
   response.end();
}).listen(3000);
console.log('server is running');