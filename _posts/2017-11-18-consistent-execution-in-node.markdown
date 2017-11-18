---
layout: post
title:  "Consistent execution in node"
date:   2017-11-18 02:14:00 -0400
categories: node asynchronous synchronous API
---
```javascript
function definitelyAsync(arg, cb) {
  if (arg) {
    process.nextTick(cb);
    return;
  }

  fs.stat('file', cb);
}
```
