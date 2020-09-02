const http = require('http');
const port = 3000;
const server = http.createServer((request, response) => {
    console.log(request.url);
    if (request.url === '/') {
        response.end('<h1>This is the home page</h1>');
    }
    if (request.url === '/about') {
        response.end('<h1>This is about page</h1>');
    } else {
        response.end('<h1>404 - not found :(</h1>');
    }
    // response.end('');
});

server.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});