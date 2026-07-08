// multiRouteServer.js

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (pathname === '/home') {
    res.end('<h1>Welcome to the Home Page</h1>');
  } else if (pathname === '/profile') {
    // Example: http://localhost:8000/profile?name=Sriyansh&age=5
    const name = query.name || 'Guest';
    const age = query.age || 'Unknown';
    res.end(`<h1>Profile Page</h1><p>Name: ${name}</p><p>Age: ${age}</p>`);
  } else if (pathname === '/search') {
    // Example: http://localhost:8000/search?query=nodejs
    const searchTerm = query.query || 'Nothing';
    res.end(`<h1>Search Results</h1><p>You searched for: ${searchTerm}</p>`);
  } else {
    res.end('<h1>404 - Page Not Found</h1>');
  }
});

// Start server
server.listen(8000, () => {
  console.log('Server running at http://localhost:8000/');
});
