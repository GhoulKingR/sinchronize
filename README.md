# Sinchronize

Sinchronize is a library for synchronizing asynchronous functions. The only difference between asychronous functions and ordinary functions is that asychronous function don't block the thread while the runtime is executing the function. Asynchronous functions have performance benefits, but as your code grows the asynchronousity may make things harder to understand.

Sinchronize allows you to convert an asychronous function to a synchronous function that makes a thread wait for its execution to be completed before proceeding. Although synchronizing a can make your code easier to understand, the thread blocking may have performance drawbacks in your application. Thread blocking may not over-utilize the CPU, but the entire application may experience slow-downs because JavaScript is a single-threaded programming language.

## Installation

To install Sinchronize into your project, run the command below:
```bash
$ npm i sinchronize
```

## Using with promises

This section shows the difference between using and not using Sinchronize for promises in your code. This will give you a good idea of what Sinchronize does:

* **Without Sinchronize**:
```JS
function delayedHello (text) {
  return new Promise(resolve => setTimeout(() => resolve(text), 1000));
}

delayedHello("Hello")
  .then(function(result) {
    console.log(result);  // -> "Hello"
  });
```

* **With Sinchronize**:
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

You'll notice that the first `delayedHello` requires a `.then` method to use its result. While, the second `delayedHello` gives you its results directly. Both programs makes the runtime wait for a second before displaying "Hello" in the console. The first `delayedHello` is asynchronous, while the second is synchronous. This means, in the second `delayedHello` the thread waits for the function to finish running before it proceeds with the rest of the program.

## Using with callbacks

This section shows the difference between using and not using Sinchronize for callbacks in your code. This will give you a good idea of what Sinchronize does:

* **Without Sinchronize**:
```JS
function delayedHello (txt, fn) {
  setTimeout(() => fn(null, txt), 1000);
}

delayedHello("Hello", function(error, result) {
  if (error === null) console.log(result);  // -> "Hello"
});
```

* **With Sinchronize**:
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

You'll notice that the first `delayedHello` requires you to pass a callback function to use its result. While, the second `delayedHello` gives you its results directly. Like the promise section, both programs makes the runtime wait for a second before displaying "Hello" in the console. The first `delayedHello` is asynchronous, while the second is synchronous, also.

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