var assert = require('assert');

describe('resFromReqArr', function () {
  var resFromReqArr = require('./../../lib/resFromReqArr');

  it('returns a function when it\'s required', function () {
    assert.equal(typeof resFromReqArr, 'function');
  });

  it('throws when it\'s passed an array with elements of not type string', function (done) {
    try {
      resFromReqObj([123]);
    }
    catch (err) {
      done();
    }
  });
});