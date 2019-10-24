const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const name = 'seu nome'

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`${name} Hello World\n`);
});

server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});