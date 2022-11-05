const deasync = require('deasync');
const util = require('util');

module.exports.asyncFunction = function(fn) {
  let cbFunction = util.callbackify(fn);
  let deFunction = deasync(cbFunction);
  return deFunction;
};

module.exports.callback = function(fn) {
  let deFunction = deasync(fn);
  return deFunction;
}

module.exports.call = {};
module.exports.call.asyncFunction = function(fn, ...args) {
  try {
    let deFunction = module.exports.asyncFunction(fn);
    let result = deFunction(...args);
    return result;
  } catch (e) {
    console.error(e);
  }
}
module.exports.call.callback = function(fn, ...args) {
  try {
    let deFunction = deasync(fn);
    let result = deFunction(...args);
    return result;
  }catch (e) {
    console.error(e);
  }
}