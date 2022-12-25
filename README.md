# Sinchronize

Welcome to Sinchronize!

Sinchronize is a JavaScript library that allows you to convert asynchronous functions to synchronous functions, making it easier to write sequential code and simplifying your codebase. With Sinchronize, you can write asynchronous code that looks and behaves like synchronous code, without having to worry about callback functions or Promises.

Whether you're working with APIs, databases, or any other asynchronous process, Sinchronize can help you write cleaner, more readable code. Try it out today and see how it can improve your development workflow!

# Use cases

Using Sinchronize is straightforward: simply import the library into your project and wrap any asynchronous function with either the `promise` function, or the `callback` function. Sinchronize will handle the rest, returning a synchronous version of the asynchronous function for you to call.

The following list explains the `promise` and `callback` functions, and shows you an example of using them:
* `promise`: The `promise` function in Sinchronize is a powerful tool that allows you to convert promise-based asynchronous functions into synchronous functions. To use the function, simply pass it a promise-based asynchronous function and it will return a synchronous version of that function. You can then use the synchronous function just like any other synchronous function, without having to worry about dealing with Promises. The example below is shows the function in action:
```JS
const sinchronize = require ("sinchronize");

function delayedHello(text) {
  return new Promise(resolve => setTimeout(() => resolve(text), 1000));
}

let synchronousFunction = sinchronize.asyncFunction(delayedHello);

let result = synchronousFunction("Hello");
console.log(result); // -> "Hello"
```

Originally you'd have to handle the result of the asynchronous function with either the `await` keyword, or the `.then()` method. Sinchronize lets you collect the result directly just like it would with any other synchronous function.

* `callback`: The callback function in Sinchronize is another useful tool for converting callback-based asynchronous functions into synchronous functions. To use the callback function, simply pass it a callback-based asynchronous function and it will return a synchronous version of that function, just like the `promise` function with a promise-based function. You can then use the synchronous function just like any other synchronous function, without having to worry about dealing with callback functions. The example below converts a callback version of `delayedHello`:

```JS
const sinchronize = require ("sinchronize");

function delayedHello(txt, fn) {
  setTimeout(() => fn(null, txt), 1000);
}

let synchronousFunction = sinchronize.callback(delayedHello);

let result = synchronousFunction("Hello");
console.log(result); // -> "Hello"
```

> **Note**: The callback-based function needs to follow the format below:
> ```JS
>   let callbackfn = function(...args: Any, function: (returnVal: returnType) => undefined)
> ``` 

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