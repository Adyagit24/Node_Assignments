const http = require('http');
const url = require('url');
const fs = require('fs');

function logRequest(reqUrl, params) {
  const timestamp = new Date().toISOString();
  const logEntry = `
Timestamp: ${timestamp}
URL: ${reqUrl}
Parameters: ${JSON.stringify(params)}
-----------------------------
`;

  fs.appendFile('log.txt', logEntry, (err) => {
    if (err) console.error('Error writing to log file:', err);
  });
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const queryParams = parsedUrl.query;

  logRequest(req.url, queryParams);

  if (pathname === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to Home Page</h1>');
  } else if (pathname === '/profile') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>This is the Profile Page</h1>');
  } else if (pathname === '/search') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<h1>Search Results</h1><p>${JSON.stringify(queryParams)}</p>`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  }
});

server.listen(8000, () => {
  console.log('Server running at http://localhost:8000');
});
