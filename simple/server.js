// Import the 'http' module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  // Set the HTTP status code and response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send a response to the client
  res.end('Hello, World!');
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
