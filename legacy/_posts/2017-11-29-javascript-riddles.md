---
layout: post
title:  "Javascript riddles"
date:   2017-11-29 02:14:00 -0400
categories: javascript riddles
---
## Palindrome

```js
let x = { [ {} ] : [ {} ] };
```
Is this valid ES6 and if yes what is the value of x?

Hint 1, dynamic evaluation of object keys:
```js
console.log({['foo' + 2] : 'bar'}); // {foo2: 'bar'}
```

Hint 2, stringify:
```js
console.log(String({})); // [object Object]
```

Solution: `{'[object Object]': [{}]}`


## Sources

- [Dan Shappir's Twitter](https://twitter.com/danshappir)
- [Dan Shappir's Youtube video](https://www.youtube.com/watch?v=D-juPGb7EKY&t=609s)
