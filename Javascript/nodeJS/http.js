const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url === "/"){
        res.write('<h1>this is home page </h1>');
        res.end()
    }

    if(req.url ==="/api/v1/person"){
        res.write(JSON.stringify(['p1','p2']))
        res.end();
    }

});
server.on('connection', (socket) => console.log("connection created"))
server.listen(3000);
console.log('listing on 3000 port') 