

const http = require('http');
let randomNumber = Math.floor(Math.random() * 100); // initial random number

// Update the random number every 2 seconds
setInterval(() => {
  randomNumber = Math.floor(Math.random() * 100);
}, 2000);

// Create HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<h1>Random Number: ${randomNumber}</h1>`);
});

// Listen on port 3000
server.listen(8000, () => {
  console.log('Server running at http://localhost:8000/');
});
