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

module.exports = resFromReqArr;
