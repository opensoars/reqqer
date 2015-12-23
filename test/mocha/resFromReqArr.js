var assert = require('assert');

describe('resFromReqArr', function () {
  var resFromReqArr = require('./../../lib/resFromReqArr');
  
  it('returns a function when it\'s required', function () {
    assert.equal(typeof resFromReqArr, 'function');
  });
});