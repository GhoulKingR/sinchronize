# Sinchronize

Welcome to Sinchronize!

Sinchronize (pronounced synchronize) provides functions for converting asynchronous functions to synchronous functions. Synchronous functions fit better in some operations than asynchronous functions, and not every asynchronous function has its synchronous version.

Asynchronous functions, although great, comes with its drawbacks. They include overcomplicating your codebase, and the program drammatically slowing down when too many asynchronous processes are running.

## Use cases

Sinchronize provides two functions:
* `promise`: for promise-based asynchronous functions.
* `callback`: for callback-based asynchronous functions.

This section will go over them.

### `promise`

Take the example below:
```JS
const sinchronize = require ("sinchronize");

function delayedHello(text) {
  return new Promise(resolve => setTimeout(() => resolve(text), 1000));
}

let synchronousFunction = sinchronize.promise(delayedHello);

let result = synchronousFunction("Hello");
console.log(result); // -> "Hello"
```

The `promise` method converts the asynchronous `delayedHello` to the synchronous `synchronousFunction`. `synchronousFunction` operates like `delayedHello`, but it doesn't need the `await` keyword to use its return value.

### `callback`

Let's see the example below:
```JS
const sinchronize = require ("sinchronize");

function delayedHello(txt, fn) {
  setTimeout(() => fn(null, txt), 1000);
}

let synchronousFunction = sinchronize.callback(delayedHello);

let result = synchronousFunction("Hello");
console.log(result); // -> "Hello"
```

The `delayedHello` function needs to follow the following format for a successful conversion:
```JS
callbackfn = (...args: Any, fn: (returnVal: returnType) => undefined) => undefined
``` 

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