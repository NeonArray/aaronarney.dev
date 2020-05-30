---
path: "/blog/named-routes-in-flutter"
date: "2019-12-21"
title: "Named Routes in Flutter"
category: "software"
tags: ["flutter", "dart"]
---

Flutter provides built-in functionality for routing in apps. You can use either pass the MaterialApp a Widget, or a named route.

There are two ways of going about named routes, you can either:

-   Use URL style routes /main or /login etc.
-   Use an arbitrary string login_screen, main_screen etc.

When using URL style identifiers, you must provide a default route of / or the app will crash. Personally, I don’t like this style at the moment, but in the future when Flutter web support is stable this may make more sense to me.

The issue with using strings as ID’s is that static code analysis won’t catch typos. Meaning if you have a login_screen route but then attempt to use that route later in your app, but accidentally type logn_screen, the IDE won’t catch that.

Instead, in each of your screen widgets, I think it’s a good idea to add a static id to the class, so that you can reference it wherever you need without having to worry about getting the string correct every time.

```dart
class LoginScreen extends StatefulWidget {
  static const String id = 'login_screen';

  @override
  _LoginScreenState createState() => _LoginScreenState();
}
```

When you create your named routes Map, pass the id’s as the key.

```dart
routes: {
  LoginScreen.id: (context) => LoginScreen(),
},
```

Then whenever you want to navigate to that screen, you simply access that static id.

```dart
Navigator.pushNamed(context, LoginScreen.id);
```

That’s it.
