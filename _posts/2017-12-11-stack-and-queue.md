---
layout: post
title:  "Stack and queue"
date:   2017-12-11 02:14:00 -0400
categories: javascript
---
## Stack

A stack is like a pile of plates. When you just cleaned a plate, you put it at the top of the pile. When you need one, you take the first one at the top of the pile.

It's also called LIFO: Last In First Out. And every time I do the dishes, it makes me wonder: Should I shuffle the plates?

We can slightly rephrase that:

When you just cleaned a plate, you **push** it at the top of the **stack**. When you need one, you **pop** the first one at the top of the **stack**.

In Javascript the Array object can be used as a **stack** out of the box.
```js
const stack = []

stack.push('plate 0');
stack.push('plate 1');
stack.push('plate 2');

stack        // ['plate 0', 'plate 1', 'plate 2']

stack.pop(); // plate 2
stack.pop(); // plate 1
stack.pop(); // plate 0
stack.pop(); // undefined
```

## Queue

A queue is like the queue at the tax administration office. Everyone takes a ticket with a number and wait for their number to be called.

It's called FIFO: First In First Out.

As with the stack, the Array object can be used as a **queue** out of the box too.

```js
const queue = []

queue.unshift('person 0');
queue.unshift('person 1');
queue.unshift('person 2');

queue         // ['person 2', 'person 1', 'person 0']

queue.pop();  // person 0
queue.pop();  // person 1
queue.pop();  // person 2
queue.pop();  // undefined
```



Sources:
- http://www.i-programmer.info/programming/javascript/1674-javascript-data-structures-stacks-queues-and-deques.html
- https://code.tutsplus.com/articles/data-structures-with-javascript-stack-and-queue--cms-23348
- https://initjs.org/implement-a-queue-in-javascript-de306a8821c
