var assert = require('assert');

describe('requiring the module', function () {
  var reqqer = require('./../../index.js');
  it('returns a function', function () {
    assert.equal(typeof reqqer, 'function');
  });
});