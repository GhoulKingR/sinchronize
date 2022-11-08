# Sinchronize

Sinchronize is a library for converting asynchronous functions into synchronous functions. Asynchronous functions return their results asynchronously. JavaScript's runtime doesn't wait for any asynchronous functions' results.

Promise-based functions and callback-based functions are the two major types of asynchronous functions in JavaScript. To use the results of an asynchronous function you need to pass a function to that the asynchronous function calls when its result is ready. For example:
```JS
setTimeout( function() {
  console.log("Hello");
}, 5000);
```

`setTimeout` is a callback-based asynchronous function, that waits for a specified period of time to execute a function. In the above function call, `setTimeout` waits 5 seconds before printing "Hello" to the console.

If you add the line below under `setTimeout`, the runtime prints "This is outside setTimeout" before printing "Hello":
```JS
console.log("This is outside setTimeout");
```

By default, any function you create is synchronous. That means, JavaScript's runtime waits for your function's results before proceeding to the next statement.

Sinchronize uses the thread-blocking capabilities to convert asynchronous functions. With Sinchronize you can construct an asynchronous function that forces JavaScript's runtime to wait for its results.


## Using with promises

The following shows you the difference between using and not using Sinchronize with a promise-based asynchronous function:

* Without Sinchronize:
```JS
function delayedHello (text) {
  return new Promise(resolve => setTimeout(() => resolve(text), 1000));
}

delayedHello("Hello")
  .then(function(result) {
    console.log(result);  // -> "Hello"
  });
```

* With Sinchronize:
```JS
const sinchronize = require ("sinchronize");

let delayedHello = sinchronize.asyncFunction(
  function (text) {
    return new Promise(resolve => setTimeout(() => resolve(text), 1000));
  }
);

let result = delayedHello("Hello");
console.log(result); // -> "Hello"
```

Looking at the differences you'll notice these two points:
* Without Sinchronize, you need to pass a callback to a `.then()` method to access the results of `delayedHello`.
* With Sinchronize, You can access the results of `delayedHello` directly because the runtime waits.

## Using with callbacks

The following shows you the difference between using and not using Sinchronize with a promise-based asynchronous function:

* Without Sinchronize:
```JS
function delayedHello (txt, fn) {
  setTimeout(() => fn(null, txt), 1000);
}

delayedHello("Hello", function(error, result) {
  if (error === null) console.log(result);  // -> "Hello"
});
```

* With Sinchronize:
```JS
const sinchronize = require ("sinchronize");

let delayedHello = sinchronize.callback(
  function (txt, fn) {
    setTimeout(() => fn(null, txt), 1000);
  }
);

let result = delayedHello("Hello");
console.log(result); // -> "Hello"
```

Just like with the promise-based asynchronous function, you'll notice the following similar points:
* Without Sinchronize, you need to pass a callback the function to access the results of `delayedHello`.
* With Sinchronize, You can access the results of `delayedHello` directly.

## License
MIT License

Copyright (c) 2022 Chigozie Oduah

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.