# mthpvg.github.io

```bash
rougify help style
rougify style github > assets/css/syntax.css
```

## Get away from Jekyll
- https://github.com/gnab/remark
- https://www.npmjs.com/package/highlight.js

## Future articles

### Links
- https://blog.sourcerer.io/writing-a-simple-linux-kernel-module-d9dc3762c234

### async sync APIs
- https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_nexttick_callback_args
- https://stackoverflow.com/questions/19729918/common-approach-to-process-nexttick
- http://blog.izs.me/post/59142742143/designing-apis-for-asynchrony/amp

### Post message
- https://robertnyman.com/html5/postMessage/postMessage.html
- https://javascript.info/cross-window-communication
  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  - https://parent.post-message.window.api.web.experiences.mthpvg.com/index.html

### object
`console.log(Object.values(obj));`

### Tone analyzer
- IBM
- Azure
- Google Compute Engine

### Atom package
https://github.com/kingarthurpt/atom-show-project-name

### Tree shake c3.js
Because 180kb minified is a lot.
https://gionkunz.github.io/chartist-js/

### JS riddles
https://www.youtube.com/watch?v=D-juPGb7EKY&t=609s
```js
let x;
x = { [ {} ] () { [] } }

console.log(x);

x = y => x <= y == x

console.log(x);

// Let assume that `val`, `def` and `target` are already declared. `val` can still be equal to `undefined`.
// Provide a shorter solution of:
target = val !== undefined ? val : def

console.log(target);

// The following is not good enough
target = val || def;

console.log(target);

[target = def] = [val]

console.log(target);

// Check if a function is an arrow function or not:

const f1 = function() {}
const f2 = () => {}

console.log(f1.hasOwnProperty('prototype'));
console.log(f2.hasOwnProperty('prototype'));

// You can not use f2 has a constructor, unlike f1.

```
