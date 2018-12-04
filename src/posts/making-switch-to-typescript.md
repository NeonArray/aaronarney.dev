---
path: "/blog/making-the-switch-to-typescript"
date: "2018-11-05"
title: "Making the Switch to TypeScript"
category: "web"
---

If you've been living under a rock, you might have not yet heard about [Microsoft's TypeScript](https://www.typescriptlang.org/index.html) - "a typed superset of JavaScript that compiles to JavaScript." A typed superset in this context just means it combines plain old JavaScript syntax with a few new extras. 

 It can often be overwhelming learning a new set of syntax and if you are new to JavaScript it may feel even more so. Luckily, learning TypeScript doesn't mean adopting it in its entirety. You can use as much or as little as you like, which makes getting started relatively painless.

## What is TypeScript For?

To answer this question, it is first helpful to understand how JavaScript works. Since JavaScript is a loosely typed language, that means that we don't have to explicitly declare our types, instead the JavaScript [JIT (just in type) compiler](https://en.wikipedia.org/wiki/Just-in-time_compilation) that is built into our web browsers, simply infer the type at run time.

That makes situations like this possible:  
```javascript
let a = 'string'; 
a = 1; 
a = false;
```

In strictly typed languages such as C# or C++, the above example would throw errors for several reasons.  

This is what TypeScript helps to mimic and achieve, a way to declare and enforce types in your JavaScript files. This helps to reduce bugs and increase collaboration. Not to mention it can reduce the sizes of your functions since you no longer must dedicate the first few lines performing the manual interrogation of your function arguments.


### Getting Started

The first thing you need to do is install TypeScript. You can do these one of two ways: 

1. NPM - `npm install -g typescript`
2. Yarn - `yarn add global typescript`
 
To ensure its installed correctly, run this command in your terminal/console to print the package version: 

```javascript
tsc -v
```

If you see something like "Version 2.7.1," great! If you see something like `command not found: tsc`, then it means TypeScript wasn't installed. Try installing it again and then restarting your terminal/console.

Now, create an empty file with the extension .ts - that stands for TypeScript. Inside we'll just create a simple function that represents a Vector2 to ensure our compiler works.

```javascript
function Vector2(x, y) { 
    return {x, y}; 
} 
```

Go back to your command line and run tsc name-of-file.ts and wait. If all goes well you will see no errors on the command line, but a new file will have been created with the same name as your TypeScript file - except with a .js extension. This is the compiled file TypeScript generated with your code. If you look, you'll notice it's the same, because we haven't written any TypeScript yet.


### Writing Type Annotations 

The next step is to use TypeScript. We're going to dive into type annotations, which essentially tell the TypeScript compiler what kind of variable a function should accept.  

In example, it should be easy enough to reason about that the function expects a number value for both x and y. However, since mistakes happen and to err is to human, we want to make sure that the compiler will throw a temper tantrum if either of the arguments are not numbers. This is where the type annotation comes into play.  

To write a type annotation, you simply follow the variable with `:` followed by the type. In our example, the outcome would be:

```typescript
function Vector2(x: number, y: number) { 
    return {x, y}; 
} 

// Let's invoke the function with numbers 
Vector2(12, 49);
```

Now, compile the file and you should see no errors. Open your file back up and change one of your numbers to a string. 

```typescript
Vector2('fail', 22);
```

If you run the compiler now, TypeScript is going to give you an error: 

```bash
thing.ts(5,9): error TS2345: Argument of type '"fail"' is not assignable to parameter of type 'number'. 
```

Awesome! That's the beauty of TypeScript. Now you can always ensure that your functions are being called with the correct type. The best part of it is though is that this error is caught at compile time, not run time. Meaning it's not going to pop up as a surprise to you or your users. 


### Return Type 

Not only can we set the type of arguments, we can also set the type that gets returned from the function. This is wonderful because anyone interacting with our code, knows without certainty that a function will always return something we expect, without side effects. Writing the return type is the same as before, except the “:” comes after the closing function parenthesis. 

```typescript
function Vector2(x: number, y: number): object { 
    return {x, y}; 
} 
```

Now, how can we test this with the tsc compiler? Let's create a variable to store the result of the function. 

```typescript
let result: number = Vector2(2, 40);
```
 
Run the compiler and wait for the error. You should have gotten this message (or something like it): 

```bash
thing.ts(4,5): error TS2322: Type 'object' is not assignable to type 'number'.
```
 
Since you're smart you've already guessed that we need to change the variables type from `number` to `object`. Go ahead and do so, then recompile. 

I am confident that this time, you ran into no issues. 

### Conclusion 

There is a lot more to TypeScript than just type annotations, but this was meant to be a "toe dipper" into the library and not an extensive deep dive. Hopefully you have found that TypeScript is not as overwhelming and scary as you may have perceived it to be.  

TypeScript can be a very helpful development tool that can reduce the number of bugs in your code. It is not a magic wand however, and care should always be taken to write clean and maintainable code above all else. 
