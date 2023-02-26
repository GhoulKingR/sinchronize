const deasync = require('deasync');
const util = require('util');

/**
 * # Summary
 * For promise-based functions.
 * 
 * ## Description
 * This function creates a synchronous version
 * of an promise-based asynchronous function.
 * 
 * ## Example
 * ```JS
 * const sinchronize = require("sinchronize");
 * 
 * function delayedHello () {
 *   return new Promise(resolve => setTimeout(() => resolve("Hello"), 10000));
 * }
 * 
 * let fn = sinchronize.promise(delayedHello);
 * console.log(fn()); // -> "Hello"
 * ```
 * 
 * @since 1.0.0
 * @param { () => Promise<any> } fn
 * @returns () => T
 */
module.exports.promise = function(fn) {
  let cbFunction = util.callbackify(fn);
  let deFunction = deasync(cbFunction);
  return deFunction;
};

/**
 * # Summary
 * For callback-based functions.
 * 
 * ## Description
 * Convert your callback asynchronous functions
 * to synchronous versions.
 * 
 * Callbacks should follow this format for a 
 * successful conversion:
 * ```JS
 * function (...args, (err, result) => void) {}
 * ```
 * 
 * ## Example
 * ```JS
 * const sinchronize = require("sinchronize");
 * 
 * function delayedHello (fn) {
 *   setTimeout(() => fn(null, "Hello"), 10000);
 * }
 * 
 * let fn = sinchronize.callback(delayedHello);
 * console.log(fn()); // -> "Hello"
 * ```
 * 
 * @since 1.0.0
 * @param { () => void } fn 
 * @returns () => any
 */
module.exports.callback = function(fn) {
  let deFunction = deasync(fn);
  return deFunction;
}