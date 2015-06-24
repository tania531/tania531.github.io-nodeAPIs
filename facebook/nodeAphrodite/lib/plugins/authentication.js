'use strict';

exports.register = function(server, options, next){

  var authenticate = {
    key: 'sn6NA8r8MrgzKh5hNBr6Sr7sK2EmYOr7w8CTzc9P',
    validateFunc: function(jwt, cb){
      var now = Date.now();
      var old = jwt.iat * 1000;

      if(now > old){
        cb(null, true, {uid: jwt.d.uid});
      }else{
        cb();
      }
    }
  };
  server.expose({authenticate:authenticate});
  return next();

};

exports.register.attribute = {
    name:'authentication'
};
