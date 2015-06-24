var http = require('http');
var fs = require('fs');
var _ = require('lodash');
var Hapi = require('hapi');
var Calc = require('./Calc');

var server = new Hapi.Server();
server.connection({ port: 8080 });

server.start(function () {
    console.log('Server running at:', server.info.uri);

	    server.route({
	    method: 'GET',
	    path: '/tania',
	    handler: function (request, reply) {
	        reply('Hello, tania!');
		    }
		});

		server.route({
	    method: 'GET',
	    path: '/{name}',
	    handler: function (request, reply) {
	        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
		    }
		});

	    server.route({

	    method: 'GET',
	    path: '/calc/{input}',
	    handler: function (request, reply) {
	    	// var items = [];

	    	var result = Calc(request.params.input);

	   
	        reply( result );
	    	}
	    });
});






