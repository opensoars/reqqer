var assert = require('assert');

describe('resFromReqObj', function () {
  var resFromReqObj = require('./../../lib/resFromReqObj');
  
  it('returns a function when it\'s required', function () {
    assert.equal(typeof resFromReqObj, 'function');
  });
});