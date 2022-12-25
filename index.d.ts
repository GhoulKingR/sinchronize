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
 * The `sinchronize.promise` method creates a
 * function that executes the asynchronous function,
 * and blocks the  thread until the async function's
 * execution is complete.
 * 
 * # Example
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
export function promise(fn: () => Promise<any>): any;

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
 * The `sinchronize.callback` method creates a function that
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
export function callback(fn: () => void): any;