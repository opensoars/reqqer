var assert = require('assert');

describe('resFromReqObj', function () {
  var resFromReqObj = require('./../../lib/resFromReqObj');

  it('returns a function when it\'s required', function () {
    assert.equal(typeof resFromReqObj, 'function');
  });

  it('returns an object containing key value module pairs according to passed object key value pairs', function () {
    var res = resFromReqObj({
      http_test: 'http',
      https_test: 'https'
    });

    assert.equal(typeof res.http_test, 'object');
    assert.equal(typeof res.https_test, 'object');
  });

  it('throws when it\'s passed an object with values of not type string', function (done) {
    try {
      resFromReqObj({ test: 123 });
    }
    catch (err) {
      done();
    }
  });

  it('throws when it\'s passed an object with non existing module names as values', function (done) {
    try {
      resFromReqObj({ test123: 'test123' });
    }
    catch (err) {
      done();
    }
  })

});