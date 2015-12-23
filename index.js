/**
 * Main reqqer module file, executes on `require('reqqer')`.
 * @module reqqer
 */

/**
 * Returns whether passed argument is an object or not.
 * @param {any} x - Gets checked for object data type
 * @return {bool} - Whether x is an object or not
 */
function isObj (x) {
  return typeof x === 'object' && !(x instanceof Array);
}

/**
 * Returns whether passed argument is an array or not.
 * @param {any} x - Gets checked for array data type
 * @return {bool} - Whether x is an array or not
 */
function isArr (x) {
  return x instanceof Array;
}

/**
 * ResulFromRequireObject.
 * @param {object} to_req - Which modules to require
 * @return {object} res - Results containing key value module pairs
 */
function resFromReqObj (to_req) {
  var res = {};
  try {
    for (var req in to_req) {
      if (to_req.hasOwnProperty(req)) {
        res[req] = require(to_req[req]); 
      }
    }
  }
  catch (err) {
    console.log(err);
    throw new Error('resFromReqObj failed');
  }
  return res;
}

/**
 * ResulFromRequireArray.
 * @param {array} to_req - Which modules to require
 * @return {object} res - Results containing key value module pairs
 */
function resFromReqArr (to_req) {
  var res = {};
  try {
    to_req.forEach(function (req) {
      res[req] = require(req);
    });
  }
  catch (err) {
    throw new Error(err);
  }
  return res;
}


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