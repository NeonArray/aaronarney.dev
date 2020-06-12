---
path: "/blog/the-javascript-event-loop"
date: "2020-06-11"
title: "The JavaScript Event Loop"
category: "web"
tags: ["Event Loop", "API", "JavaScript"]
---

JavaScript is an interesting language and part of that interestingness comes from it's event driven architecture. Everytime we need some code to execute we have to hook into an event of some sort. Whether it's when the page loads, a button is clicked or a message is broadcast.

Think about how click handlers work. Typically you write something like this..

```javascript
document.getElementById("button").addEventListener("click", callback);
```

Here "click" is an ID of an event that get's emitted by the JavaScript engine any time a button in the DOM is clicked or tapped. Using the `addEventListner` let's us hook into that event so we can do something interesting. This is event driven JavaScript.


## The Event Loop

JavaScript utilizes what is known as The Event Loop&trade;. If you have ever written a video game or used the Observer/Pub-sub design patter it is likely you already are familiar with the event loop concept.

```javascript
while (queue.waitForMessage()) {
    queue.processNextMessage();
}
```

You might think that when we add an event listener, like the "click" one above, that it get's pushed into this queue. This is in a way true, but not really.

When a button is found in the DOM, all click events are handled by the browser automatically. It knows what all events an element supports and dispatches messages when those events are triggered.

I'm getting a little sidetracked here, but this is what a basic observer would look like in JavaScript.

```javascript
const Observer = {

    /**
     * A list of registered observers. The intent is to store essentially key->value pairs
     * so that events like "click", "change", "submit" etc are stored as keys with an 
     * array of callbacks as their values.
     */
    observers: new Map(),

    /**
     * Register a callback with a given event. If an event already has been initialized
     * with an array we use the spread operator to merge the existing array with the 
     * new observer.
     */
    addEventListener: function (eventID, callback) {
        const queue = [callback];

        if (this.observers.get(eventID).isArray) {
            queue.push(...this.observers.get(eventID));
        }

        this.observers.set(eventID, queue);
    },

    /**
     * Dispatch a message to all registered observers for a given event name.
     */
    notifyListeners: function (eventID, event) {
        this.observers.get(eventID).forEach((observer) => {
            observer(event);
        });
    }
};
```

Now imagine that this is the implementation the browser uses (narrator: it isn't). When click events occur, the browser would then execute the `notifyListeners` passing `click` as the `eventID` and an object containing all of the event data we've come to expect as the `event` argument.

With an understanding of events/messages, there are three new terms we need to understand here.

- The Stack
- The Queue
- The Heap


### The Stack

The stack is a list of function calls that create a stack of frames. The frames are generated when the engine encounters a new function call. That frame contains all of the variables and arguments of the function. Frames are generated until there are no more function calls being made. Then as each frame returns some value either implecitely or explicitely, frames are popped off the stack until there are no more frames.

The absolute easiest way to understand the stack is realizing this is the exact same stack you see when debugging or encountering errors in the console. The stack trace is a human readable form of this stack.


### The Queue

A queue a linear wait-list. Harking back to our event listeners, when a button is clicked a new item is pushed into this queue to process that button click. Then if event listeners are found to be observing this click, additional messages are pushed into this queue. The queue works by processing messages in a FIFO (first in first out) manner.


### The Heap

The heap is just a section in memory where the engine has reserved for use. When items in the stack have variables for instance, those values are stored in the heap.

```html
   STACK                                 HEAP
-----------
-  Frame  -
-----------                 [] Object
-----------        [] Object
-  Frame  -
-----------
-----------                         [] Object
-  Frame  -
-----------
-----------------------------------------------------
- Message -- Message -- Message -- Message --       - QUEUE
-----------------------------------------------------
```

This is how JavaScript does what it does. Wait, process, execute rinse and repeat over and over until the end of time.