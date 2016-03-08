var assert = require('assert');

describe('using the module', function () {

  var reqqer = require('./../../index.js');

  describe('passing it an object with key value module pairs', function () {
    it('returns an object with modules', function () {
      var reqs = reqqer({
        t1: 'fs',
        t2: 'http'
      });

      assert.equal(typeof reqs.t1, 'object');
      assert.equal(typeof reqs.t2, 'object');
    });
  });

  describe('passing it an array with module strings', function () {
    it('returns an object with modules', function () {
      var reqs = reqqer(['fs', 'http']);

      assert.equal(typeof reqs.fs, 'object');
      assert.equal(typeof reqs.http, 'object');
    });
  });


  describe('passing it something other than an array or object', function () {
    it('returns an object with modules', function (done) {
      try {
        reqqer('123');
      }
      catch (e) {
        done();
      }
    });
  });
});