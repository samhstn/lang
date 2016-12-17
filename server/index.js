const assert = require('assert');
const Hapi = require('hapi');
const config = require('./config.js');
const api = require('./api');

const server = new Hapi.Server();

server.connect(config);

server.register(api, (err) => assert(!err, new Error(err)));

module.exports = server;
