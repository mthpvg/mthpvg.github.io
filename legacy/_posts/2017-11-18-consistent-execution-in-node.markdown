---
layout: post
title:  "Consistent execution in node"
date:   2017-11-18 02:14:00 -0400
categories: node
---
## Best practise
> It is very important for APIs to be either 100% synchronous or 100% asynchronous.

Source: [node's doc](https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_nexttick_callback_args)

## Counter example

```javascript
const isSync = Math.random() > 0.5;

foo(isSync, () => {
  console.log('foo');
});
console.log('bar');


function foo(isSync, callback) {
  if (isSync) return callback();
  setTimeout(() => { return callback(); }, 100);
}
```
Two outcomes are possible every time this code is executed.

Either:
```bash
foo
bar
```
Or:
```bash
bar
foo
```

One issue is that `foo` looks like an asynchronous function because of its `callback` argument. But every other time it will executes synchronously.


## Alternative implementation

```javascript
const isSync = Math.random() > 0.5;

foo(isSync, () => {
  console.log('foo');
});
console.log('bar');


function foo(isSync, callback) {
  // Note the use of `process.nextTick.`
  if (isSync) return process.nextTick(callback);
  setTimeout(() => { return callback(); }, 100);
}
```
Only one outcome is possible:
```bash
bar
foo
```
