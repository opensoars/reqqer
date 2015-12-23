/**
 * Main reqqer module file, executes on `require('reqqer')`.
 * @module reqqer
 */

// Helpers

/**
 * Returns whether passed argument is an object or not.
 * @private
 * @param {any} x - Gets checked for object data type
 * @return {bool} - Whether x is an object or not
 */
function isObj (x) {
  return typeof x === 'object' && !(x instanceof Array);
}

/**
 * Returns whether passed argument is an array or not.
 * @private
 * @param {any} x - Gets checked for array data type
 * @return {bool} - Whether x is an array or not
 */
function isArr (x) {
  return x instanceof Array;
}


// Reqqer application logic
var resFromReqObj = require('./lib/resFromReqObj'),
    resFromReqArr = require('./lib/resFromReqArr');


// Reqqer abstracted application flow

/**
 * Main exported function. Takes either an object or array of modules to
 * require, else throw error.
 * @param {object} to_req - Key value pairs of what to `require`
 */
function reqqer (to_req) {
  var res;

  if (isObj(to_req)) {
    res = resFromReqObj(to_req);
  }
  else if (isArr(to_req)) {
    res = resFromReqArr(to_req);
  }
  else {
    throw new Error('Expected either an array or object as 1st agument');
  }

  return res;
}

module.exports = reqqer;