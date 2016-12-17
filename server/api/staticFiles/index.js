exports.register = (server, options, next) => {
  server.route([
    {
      path: '/{param*}',
      method: 'get',
      handler: (request, reply) => reply.file('./public/index.html')
    },
    {
      path: '/resources/{param*}',
      method: 'get',
      handler: { directory: { path: 'client' } }
    }
  ]);  
  
  next();
}

exports.register.attributes = { pkg: { name: 'staticFiles' } };
