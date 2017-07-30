let express = require('express');
let http = require('http');

let app = express();

// server 'ip' and 'port'
let ip_server = '173.212.207.18'; // my server ip
let server_port = 8091;
let ip_test = 'localhost'; // test locally server ip


let server = http.createServer(app);
let port = process.env.ip  || server_port;


let routes = require('./routes');
routes.myRoutes(app);


server.listen(port, ip_test ,function () {
    console.log('server listening on port ' + port);
})

exports = module.exports = app;