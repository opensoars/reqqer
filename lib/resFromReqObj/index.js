/**
 * ResulFromRequireObject.
 * @param {object} to_req - Which modules to require
 * @return {object} res - Results containing key value module pairs
 */
function resFromReqObj (to_req) {
  var res = {};
  try {
    for (var req in to_req) {
      /* istanbul ignore next */
      if (to_req.hasOwnProperty(req)) {
        res[req] = require(to_req[req]); 
      }
    }
  }
  catch (err) {
    throw new Error(err);
  }
  return res;
}

module.exports = resFromReqObj;

