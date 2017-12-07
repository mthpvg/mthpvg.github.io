---
layout: post
title:  "To string conversions"
date:   2017-11-29 02:14:00 -0400
categories: javascript details
---
Note: the comments on the right side is the return value of the left side.
```js
String('foo')                 // foo
JSON.stringify('foo')         // "foo"
'foo'.toString()              // foo
```

```js
String({})                    // [object Object]
JSON.stringify({})            // {}
{}.toString()                 // [object Object]
```

```js
String(null)                  // null
JSON.stringify(null)          // null
null.toString()               // Cannot read property 'toString' of null
```

```js
String(undefined)             // undefined
JSON.stringify(undefined)     // undefined
undefined.toString()          //Cannot read property 'toString' of undefined
```
`null` and `undefined` are not object. Ok `null` is but it should not be. Nevertheless both lack a `toString` method, hence the: `Cannot read property 'toString'`.

```js
const obj = {
  baz: 'baz',
  toString: function () { return 'foo'; },
  valueOf: function () { return 'bar'; }
};

String(obj)                  // foo
JSON.stringify(obj)          // {"baz:"baz}
obj.toString()               // foo

obj + 'qux'                  // barqux
const arr = [obj, 'qux'];
arr[0] + arr[1]              // fooqux
```
- We can see that the `String` function calls the `toString` method behind the scene.
- When using the `+` operator the concatenation uses the ` valueOf` method.
- On the other hand `[obj, 'qux']` is calling the `toString` method.

```js
obj.toString = null;

String(obj)                  // bar
JSON.stringify(obj)          // {"baz:"baz,"toString":null}
obj.toString()               // obj.toString is not a function
```
The `toString` method is not available so it falls back to the `valueOf` method.

```js
obj.valueOf = null;

String(obj)                  // Cannot convert object to primitive value
JSON.stringify(obj)          // {"baz:"baz,"toString":null,"valueOf":null}
obj.toString()               // obj.toString is not a function
```
None of the needed methods are here, it throws.

```js
const obj = {
  baz: 'baz',
  toString: function () { return 'foo'; },
  valueOf: function () { return 'bar'; }
};

obj.valueOf = null;

String(obj)                  // foo
JSON.stringify(obj)          // {"baz:"baz}
obj.toString()               // foo

obj + 'qux'                  // fooqux
const arr = [obj, 'qux'];
arr[0] + arr[1]              // fooqux
```
Funny enough, or not, the concatenation with the `+` operator also uses `toString` as a fallback if `valueOf` is not available.
It's the exact opposite behavior as with the string conversion.

Source: http://www.adequatelygood.com/Object-to-Primitive-Conversions-in-JavaScript.html
