/**
 * Main reqqer module file, executes on `require('reqqer')`.
 * @module reqqer
 */

/**
 * @param {any} x - Gets check for object data type
 */
function isObj (x) {
  return typeof x === 'object' && !(x instanceof Array);
}

function isArr (x) {
  return x instanceof Array;
}

function resFromObj (to_req ) {
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
    throw new Error('resFromObj failed');
  }
  return res;
}

function resFromArr (to_req) {
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
 * @param {object} to_req - Key value pairs of what to `require`
 */
function reqqer (to_req) {
  var res;

  if (isObj(to_req)) {
    res = resFromObj(to_req);
  }
  else if (isArr(to_req)) {
    res = resFromArr(to_req);
  }
  else {
    throw new Error('Expected either an array or object as 1st agument');
  }

  return res;
}

module.exports = reqqer;


var t = reqqer(['asd']);

console.log(typeof t);