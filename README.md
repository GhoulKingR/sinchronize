# Sinchronize

Sinchronize is a library for synchronizing asynchronous functions. The only difference between asychronous functions and ordinary functions is that asychronous function don't block the thread while the runtime is executing the function. Asynchronous functions have performance benefits, but as your code grows the asynchronousity may make things harder to understand.

Sinchronize allows you to convert an asychronous function to a synchronous function that makes a thread wait for its execution to be completed before proceeding. Although synchronizing a can make your code easier to understand, the thread blocking may have performance drawbacks in your application. Thread blocking may not over-utilize the CPU, but the entire application may experience slow-downs because JavaScript is a single-threaded programming language.

## Installation

To install Sinchronize into your project, run the command below:
```bash
$ npm i sinchronize
```

## Usage

Sinchronize allows you to synchronize callback-based, and promise-based asychronous functions. In this section, I'll show you how to perform both operations using simple examples.

* **synchronizing promise-based asynchronous functions**: In the code below, you'll notice the `delayedHello` asynchronous function declared after importing Sinchronize. The `declaredHello` function is passed to `sinchronize.asyncFunction` to create a synchronous version of `declaredHello`. When the synchronous version of `declaredHello` is called, the function pauses the main thread for one second before returning what you passed to it.
```JS
const sinchronize = require ("sinchronize");

function delayedHello (text) {
  return new Promise(resolve => setTimeout(() => resolve(text), 1000));
}

let fn = sinchronize.asyncFunction (delayedHello);
let result = fn ("Hello");

console.log(result); // -> "Hello"
```

* **synchronizing callback-based asynchronous functions**: In the code below, you'll notice the `delayedHello` asynchronous function declared after importing Sinchronize. The `declaredHello` function is passed to `sinchronize.callback` to create a synchronous version of `declaredHello`. When the synchronous version of `declaredHello` is called, the function pauses the main thread for one second before returning what you passed to it.
```JS
const sinchronize = require ("sinchronize");

function delayedHello (txt, fn) {
  setTimeout(() => fn(null, txt), 1000);
}

let fn = sinchronize.callback (delayedHello);
let result = fn ("Hello");

console.log(result); // -> "Hello"
```

## License
The MIT License (MIT)

Copyright (c) 2022

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.