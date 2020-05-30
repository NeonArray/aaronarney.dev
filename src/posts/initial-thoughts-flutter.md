---
path: "/blog/initial-thoughts-flutter"
date: "2018-12-19"
title: "Initial Thoughts on Flutter"
category: "software"
tags: ["react native", "mobile apps", "thoughts"]
---

While building an app in React Native, I accidentally stumbled on Flutter. I had heard of, but never used the Dart language and was surprised to learn that Flutter existed as a React Native alternative. Glancing the docs got me excited to try it out, so I wrapped up as much as I could to make my other app "complete" and immediately moved into rebuilding it in Flutter.

I decided to run through a Udemy course (which I highly recommend) called ["The Complete Flutter App Development Course"](https://www.udemy.com/flutter-dart-the-complete-flutter-app-development-course/) before I started hacking together an app on my own, just to make sure I was building it the "Flutter" way. After getting far enough through that course I started porting over the app. I'm around 35% of the way through and decided to put together a sort of pros and cons list of my findings so far.

## Pros:

-   Simple to start a new app.
-   Very simple to debug with additional tools built into Android Studio (inspectors, performance, etc).
-   Dart is basically TypeScript, so the adoption and learning process is smooth if you have experience with it.
-   Testing framework is built-in an easy to get started. No installing additional dependencies and configurations.
-   Laying out and styling the UI is substantially easier. Once you understand how to compose your Widgets, that is.
-   The API documentation for both Dart and Flutter is fantastic.
-   Google introduces a new architecture design pattern called BLoC which seems well suited to Flutter and apps in general.

### Cons:

-   Not a lot of worldwide adoption so the ecosystem is much smaller than React Native.
-   While the API docs are great, I found there to be lacking real-world examples here and there.
-   The Dart linter takes direction from a remote server so can be difficult to configure. There was limited documentation on how to customize these lint rules. Other times I encountered errors which said one thing but meant another. Overall this was a very limited and tame issue.
-   Could be a harder "sell" to development teams since it not only requires learning a new framework, but a new language as well. If teams are already using React Native and other JavaScript frameworks, I could see this being an uphill battle.

As a fan of React, it _almost_ disappoints me to say that I found Flutter to be a much better tech stack to build apps with. The amount of configuring and third-party libraries and tools you need to get started in React Native and debugging, is just maddening. I absolutely love just having everything work and tie-in out of the box. Debugging apps on a mac with React Native Debugger sucks!

###### Edits

-   February 5, 2019 - Fixed several typos
