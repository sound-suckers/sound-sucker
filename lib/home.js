exports.register = function(server, options, next) {

  server.route([{
      method: 'GET',
      path: '/',
      config: {
        description: 'return the home page',
        handler: function(request, reply) {
          console.log('in home.js');
          return reply.view('index');
        }
      }
    }

  ]);

  return next();
};

exports.register.attributes = {
  name: 'Home'
};
