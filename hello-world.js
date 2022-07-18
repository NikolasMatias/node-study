const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(((req, res) => {
    res.statusCode = 200;
    // console.log(res.socket);
    console.log(req.url);
    console.log(req.method);

    switch (req.url) {
        case '/teste':
            res.setHeader('Content-Type', 'text/plain');
            res.end('O teste de rotas deu certo');
            break;
        default:
            res.setHeader('Content-Type', 'text/plain');
            res.end('Hello, World\n');
    }
}));

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})