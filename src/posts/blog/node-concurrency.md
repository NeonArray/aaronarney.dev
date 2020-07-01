---
title: Node Concurrency
path: /blog/node-concurrency
date: 2020-07-01T20:51:01.772Z
category: web
tags:
  - node
  - concurrency
---
Node.js in of itself is a single-threaded application (if you want to call it that). However through the use of `libuv` and the underlying operating system, we can enjoy asynchronous capabilities. The question I'm going to hopefully answer, is how does this work?

## Node.js Event Loop

First, we need to have an understanding of how the event loop works in Node. The event loop is essentially an infinite while loop that waits for an instruction, executes it, and returns to waiting unless there are no more tasks in which case Node will gracefully shut-down.

There are a group of queue's which are called phases in Node nomenclature, each with a specific job.

* Timers - Executes callbacks scheduled by `setTimeout` and `setInterval`.
* Pending Callbacks - Executes I/O callbacks that have been deferred to the next loop iteration.
* Idle, Prepare - Used internally by Node.
* Poll - Get new I/O events and execute I/O callbacks
* Check - Executes callbacks registered with `setImmediate`
* Close Callbacks - Close certain callbacks such as `socket.on('close', ...)`.

I'm not going to go into detail about each of these phases in this post, but perhaps in the future I will. Until then you can [read about each phase in-depth](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#phases-in-detail) over at the Node docs.

```javascript
let programIsRunning = true;

let taskQueue = 
while (programIsRunning) {
    return intervalQueue || timeoutQueue || osQueue || 
}
```