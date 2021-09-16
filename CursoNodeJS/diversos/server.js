const http = require("http");
const host = '127.0.0.1';
const port = 8000;
 
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("Olá mundo \n Meu primeiro script.");
};
 
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});