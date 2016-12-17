const server = require('./server');

server.start((err) => {
  assert(!err, new Error(err));

  console.log(`Server running on ${server.info.uri}`);
});
