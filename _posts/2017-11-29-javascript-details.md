---
layout: post
title:  "Javascript details"
date:   2017-11-29 02:14:00 -0400
categories: javascript details
---
## String

`String()` vs `toString()` vs `JSON.stringify`

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

```js
const obj = {
  baz: 'baz',
  toString: function () { return 'foo'; },
  valueOf: function () { return 'bar'; }
};

String(obj)                  // foo
JSON.stringify(obj)          // {"baz:"baz}
obj.toString()               // foo
```

```js
obj.toString = null

String(obj)                  // bar
JSON.stringify(obj)          // {"baz:"baz,"toString":null}
obj.toString()               // obj.toString is not a function
```

```js
obj.valueOf = null

String(obj)                  // Cannot convert object to primitive value
JSON.stringify(obj)          // {"baz:"baz,"toString":null,"valueOf":null}
obj.toString()               // obj.toString is not a function
```

Explanation from [CMS's answer on Stackoverflow](https://stackoverflow.com/questions/3945202/whats-the-difference-between-stringvalue-vs-value-tostring) is:

In a brief, when converting from Object-to-String, the following steps are taken:

1. If available, execute the toString method.
  If the result is not a primitive, go to Step 2, else return the result
2. If available, execute the valueOf method.
  If the result is a primitive, return result, else Step 3.
#. Throw TypeError.

## You want to know more

- http://www.adequatelygood.com/Object-to-Primitive-Conversions-in-JavaScript.html
