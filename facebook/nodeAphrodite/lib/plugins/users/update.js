'use strict';

var Joi = require('joi');
var User = require('../../models/user');

exports.register = function(server, options, next){
  server.route({
    method: 'PUT',
    path: '/profile',
    config: {
      description: 'update user profile',
      validate: {
        payload: {
          email: Joi.string().email().required(),
          avatar: Joi.string().uri().required(),
          address: Joi.string(),
          photo: Joi.string(),
          birthday: Joi.date(),
          gender: Joi.string().required()
        }
      },
      handler: function(request, reply){
        var user = new User(request.payload);
        user.save(function(err){
          return reply(err || user).code(err ? 400 : 200);
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'users.update'
};
