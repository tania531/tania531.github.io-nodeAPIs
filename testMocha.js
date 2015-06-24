var assert = require('assert');  //  import mocha assertion library
var CH = {};

CH.sum = function(a, b) {
  a = a || 0;
  b = b || 0;
  return a + b;
}

describe('CH', function() {
  describe('the sum function', function(){
    it('returns the sum of its 2 arguments', function(){
      assert.equal(7, CH.sum(3, 4));
      assert.equal(-1, CH.sum(0, -1));
    });
    it('returns zero when no arguments are present', function() {
      assert.equal(0, CH.sum());
      assert.equal(3, CH.sum(undefined, 3));
    });
  });
});
