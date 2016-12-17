const { port, host } = require('app/config/server.conf.js');

module.exports = {
  port: process.env.PORT || port,
  host: process.env.HOST || host
};
