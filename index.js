const deasync = require('deasync');
const util = require('util');

/**
 * # Summary
 * Synchronizes a promise-based async function.
 * 
 * # Description
 * A promise-based async function is a type async
 * function in JavaScript. The runtime executes
 * a promise-based async function without blocking
 * the thread even as the function is being executed.
 * 
 * The `sinc.asyncFunction` method creates a
 * function that executes the asynchronous function,
 * and blocks the  thread until the async function's
 * execution is complete.
 * 
 * # Example
 * ```JS
 * const sinc = require("sinc");
 * 
 * function delayedHello () {
 *   return new Promise(resolve => setTimeout(() => resolve("Hello"), 10000));
 * }
 * 
 * let fn = sinc.asyncFunction(delayedHello);
 * console.log(fn()); // -> "Hello"
 * ```
 * 
 * @since 1.0.0
 * @param { () => Promise<T> } fn
 * @returns () => T
 */
module.exports.asyncFunction = function(fn) {
  let cbFunction = util.callbackify(fn);
  let deFunction = deasync(cbFunction);
  return deFunction;
};

/**
 * # Summary
 * Synchronizes a callback-based async function.
 * 
 * # Description
 * A callback-based async function is another type
 * of async functions in JavaScript. Like the promise-based
 * functions, these types also dont't block the thread
 * while it's being executed.
 * 
 * The `sinc.callback` method creates a function that
 * executes a callback-based async function, while blocking
 * the current thread.
 * 
 * For the function to work properly, the callback-based async
 * function must follow the pattern below:
 * ```JS
 * function (...args, (err, result) => void) {}
 * ```
 * 
 * # Example
 * ```JS
 * const sinc = require("sinc");
 * 
 * function delayedHello (fn) {
 *   setTimeout(() => fn(null, "Hello"), 10000);
 * }
 * 
 * let fn = sinc.callback(delayedHello);
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

module.exports.call = {};

/**
 * # Summary
 * Synchronously execute a promise-based async function.
 * 
 * # Description
 * A promise-based async function is a type async
 * function in JavaScript. The runtime executes
 * a promise-based async function without blocking
 * the thread even as the function is being executed.
 * 
 * The `sinc.call.asyncFunction` method synchronously executes a
 * promise-based async function. `sinc.call.asyncFunction` takes
 * the async function as its first argument, then takes whatever arguments
 * you want to pass to the async function as the remaining arguments.
 * `sinc.call.asyncFunction` then executes the async function,
 * and blocks the current thread until the function is done executing.
 * 
 * # Example
 * ```JS
 * const sinc = require("./index.js");
 * 
 * function delayedHello (text) {
 *   return new Promise(resolve => setTimeout(() => resolve(text), 1000));
 * }
 * 
 * let result = sinc.call.asyncFunction(delayedHello, "Hello, World");
 * console.log(result); // -> "Hello, World"
 * ```
 * 
 * @since 1.0.0
 * @param { () => Promise<any> } fn 
 * @param  {...any} args 
 * @returns any | void
 */
module.exports.call.asyncFunction = function(fn, ...args) {
  try {
    let deFunction = module.exports.asyncFunction(fn);
    let result = deFunction(...args);
    return result;
  } catch (e) {
    console.error(e);
  }
}

/**
 * # Summary
 * Synchronously execute a callback-based async function.
 * 
 * # Description
 * A callback-based async function is another type
 * of async functions in JavaScript. Like the promise-based
 * functions, these types also dont't block the thread
 * while it's being executed.
 * 
 * The `sinc.call.callback` method synchronously executes a
 * callback-based async function. `sinc.call.callback` takes
 * the async function as its first argument, then takes whatever arguments
 * you want to pass to the async function as the remaining arguments.
 * `sinc.call.callback` then executes the async function,
 * and blocks the current thread until the function is done executing.
 * 
 * # Example
 * ```JS
 * const sinc = require("./index.js");
 * 
 * function delayedHello (txt, fn) {
 *   setTimeout(() => fn(null, txt), 1000);
 * }
 * 
 * let result = sinc.call.callback(delayedHello, "Hello, World");
 * console.log(result); // -> "Hello, World"
 * ```
 * 
 * @since 1.0.0
 * @param { () => void } fn 
 * @param  {...any} args 
 * @returns any | void
 */
module.exports.call.callback = function(fn, ...args) {
  try {
    let deFunction = deasync(fn);
    let result = deFunction(...args);
    return result;
  }catch (e) {
    console.error(e);
  }
}