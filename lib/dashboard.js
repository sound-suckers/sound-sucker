exports.register = function(server, options, next) {

  server.route([{
      method: 'GET',
      path: '/dashboard/{dashtype}',
      config: {
        description: 'return the data receive',
        handler: function(request, reply) {
          var requestAPI = require('request');

          var dashtype = request.params.dashtype;
          console.log('/dashboard/{dashtype}', dashtype);

          
          return reply.view('dashboard');

        }
      }
    }

  ]);

  return next();
};

exports.register.attributes = {
  name: 'Dashboard'
};
