const deasync = require('deasync');
const util = require('util');

module.exports.promise = function(fn) {
  let cbFunction = util.callbackify(fn);
  let deFunction = deasync(cbFunction);
  return deFunction;
};

module.exports.callback = function(fn) {
  let deFunction = deasync(fn);
  return deFunction;
}

module.exports.call = {};
module.exports.call.promise = function(fn, ...args) {
  let result = null;
  try {
    let deFunction = module.exports.promise(fn);
    result = deFunction(...args);
  } catch (e) {
    console.error(e);
  }
  return result;
}
module.exports.call.callback = function(fn, ...args) {
  let result = null;
  try {
    let deFunction = deasync(fn);
    result = deFunction(...args);
  }catch (e) {
    console.error(e);
  }
  return result;
}