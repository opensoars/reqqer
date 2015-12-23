var assert = require('assert');

describe('resFromReqArr', function () {
  var resFromReqArr = require('./../../lib/resFromReqArr');

  it('returns a function when it\'s required', function () {
    assert.equal(typeof resFromReqArr, 'function');
  });

  it('returns an object containing key value module pairs according to passed array elements', function () {
    var res = resFromReqArr(['http', 'https']);

    assert.equal(typeof res.http, 'object');
    assert.equal(typeof res.https, 'object');
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