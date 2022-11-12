# Sinchronize

Sinchronize is a library for synchronizing asynchronous functions. Asynchronous functions are functions that delivers their results asynchronously. When a function is asynchronous, the runtime doesn't wait for its result before proceeding with executing the code.

JavaScript provides two ways to capture the results of an asynchronous function. The two ways are:
* **Callbacks**: Callbacks are functions passed as arguments to an asynchronous function to execute when its result is ready. The following is an example of a callback in action:
```JS
const sayHello = () => {
  console.log("Hello");
}

setTimeout (sayHello, 5000);
```

In the code above, `setTimeout` is an anonymous function that waits for a period of time before executing a function. `sayHello` is a callback function that `setTimeout` executes. `setTimeout` waits for 5 seconds (5000 milliseconds) to execute `sayHello`.

* **Promises**: Promises are special JavaScript objects for making asynchronous operations. JavaScript has a `Promise` class for making custom promises. The following is an asynchronous function created with promises:
```JS
const sayHello = () => {
  const promise = new Promise( (resolve, reject) => {
    setTimeout( () => resolve("Hello"), 5000 );
  } );
  return promise;
}
```

A function becomes asynchronous once it returns a promise. The `sayHello` function above returns "Hello" after 5 seconds. To capture the result of `sayHello`, call a `.then` method after calling the function:
```JS
sayHello()
  .then( (result) => {
    console.log(result);
  });
```

Once you synchronize an asynchronous function you can access its result directly. Because, the runtime will wait for the function's result before proceeding with executing the code.

## Using with promises

To use Sinchronize to create a synchronous version of a promise-based asynchronous function go through the following steps:
1. Import `asyncFunction` from `sinchronize`.
2. Pass the asynchronous function to `asyncFunction`.

`asyncFunction` returns the synchronous version of the promise-based function. The code below shows how creating a synchronous version of a callback-based function looks:
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

`delayedHello` runs synchronously, which means you can get its results directly.

## Using with callbacks

To use Sinchronize to create a synchronous version of a callback-based asynchronous function go through the following steps:
1. Import `callback` from `sinchronize`.
2. Pass the asynchronous function to `asyncFunction`.

`callback` returns the synchronous version of the callback-based function. The code below shows how creating a synchronous version of a promise-based function looks:
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

Like the _Using with promise_ section, `delayedHello` runs synchronously, and you can access its result directly.

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