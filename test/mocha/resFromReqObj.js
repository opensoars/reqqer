var assert = require('assert');

describe('resFromReqObj', function () {
  var resFromReqObj = require('./../../lib/resFromReqObj');

  it('returns a function when it\'s required', function () {
    assert.equal(typeof resFromReqObj, 'function');
  });

  it('throws when it\'s passed an object with values of not type string', function (done) {
    try {
      resFromReqObj({ test: 123 });
    }
    catch (err) {
      done();
    }
  });
});