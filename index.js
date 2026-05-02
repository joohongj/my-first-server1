const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
  if (request.url === '/' || request.url === '/index.html') {
    try {
      const data = fs.readFileSync('index.html');
      response.writeHead(200, {
        'Content-Type': 'text/html'
      })
      response.end(data);

    } catch (error) {
      response.writeHead(500);
      response.end('Something went wrong')

    }
  } else {
    response.writeHead(404);
  }
});

server.listen(3000, function () {
  console.log('Server is running at http://localhost:3000');
});