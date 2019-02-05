---
path: "/blog/testing-wordpress-plugins-phpunit"
date: "2018-12-06"
title: "Testing WordPress Plugins with PHPUnit and WP Mock"
category: "web"
tags: ["PHP", "WordPress", "Plugin", "Testing"]
---

## Part 1: Up & Running

**Assumptions**
This article assumes a basic understanding of WordPress Plugins and the PHP language. I'll also be using the OSX/Linux flavor in terminal examples. If you are on Windows, you will need to use your own respective commands.

--- 

Testing code is important. It's the only way to know for certain that something you've changed in your code behaves exactly as how you intended. Without automated testing there is a need to constantly run your code and check for every condition manually after every single change you make. This is far from ideal and a huge waste of your time. Granted tests do **not** make your code bug free, but it certainly is a start to a healthy and maintainable codebase.

As you begin writing tests you may find that your idea of "simple" and "elegant" code, may be turned upside down. For example, I discovered that even having several `if` statements in one function can be somewhat difficult to test every condition for which means that my function was too complicated. This is what testing code gifts us.

The downside of tests are that they can be quite difficult to get started with and slow your development time substantially. That's not even factoring in the added complexity of integrating unit tests with WordPress, but that's something I hope to help remedy by the time you finish this article.


For those who are new to testing, there are quite a few different types of tests you can write. For the sake of brevity, we're only going to cover two:

- Unit Tests
- Integration Tests


### Unit Tests

Unit tests are ones that only test a single part, or unit, of your code. Consider the following class...

```php
class Math {
    
    public function add( int a, int b ) : int {
        return a + b;
    }

    public function divide( int a, int b ) : int {
        return a / b;
    }

    public function multiply( int a, int b ) : int {
        return a * b;
    }
}
```

With unit tests, we would write separate tests for each individual method, `add`, `divide`, and `multiply`. 


### Integration Tests
 
On the other hand, integration tests are those that test an entire system or object. For example, if we had written a class that uses dependency injection to load another class in its constructor; with integration tests we would test that the classes work together appropriately.

```php
class FirstClass {
    
    protected $secondClass;

    public function __constructor( SecondClass $instance ) {
        $this->secondClass = $instance;
    }
}
```

You may be wondering why we wouldn't just test the constructor with a unit test in the following way:

```php
$actual = new FirstClass( new SecondClass() );
```

The reason is that when we write our unit test for the constructor, we'll be passing what is known as a `stub` instead of an actual `SecondClass` object. We'll get into that later on, but for now just know that unit tests should **always** be done in isolation, meaning to have no external dependencies or reliance on code outside of its own body.


### Get Dependencies

In order to even use WP Mock, you will need to have `PHP v^7.0` installed in your environment. You'll also need the plugin you are going to test installed into WordPress.

Lastly, you'll need `composer` installed. If you don't know what composer is or how to use it, take a pause here and go read through the [getting started](https://getcomposer.org/doc/00-intro.md) guide on composers website.


## Installing

Start by installing `PHPUnit` and `WP Mock` into your plugin. Open up a terminal and navigate to your plugins root directory and run the following.

```bash
composer require --dev 10up/wp_mock:0.3.0
```

As a side note, an issue I've run into is that I have to use a downgraded version of PHPUnit in order for the tests to pass. At the time of this writing, there is a solution [that can be found here](https://github.com/10up/wp_mock/issues/117).

To mitigate, require PHPUnit version `6.5.8`:

```bash
composer require --dev phpunit/phpunit:6.5.8
```


## Configuration

Next, a configuration file can optionally be created, though I highly recommend doing so. This configuration file accomplishes things such as telling PHPUnit where to look for tests, what directories to exclude, and if code coverage reports should be created. 

This file should be named `phpunit.xml.dist` and placed in your project root. To start, I'll specify..

- Test directory as `./tests/`
- Test file names all start with `test-`
- File extensions with `.php`

```xml
<?xml version="1.0"?>
<phpunit>
    <testsuites>
        <testsuite>
            <directory prefix="test-" suffix=".php">./tests/</directory>
        </testsuite>
    </testsuites>
</phpunit>
```

I like to see my code coverage so I have a clear picture of exactly what code is getting hit throughout my tests, so I'll set that up as well. Code coverage reports are great visual helpers that allow you to quickly see and understand what classes and methods are lacking tests.

This section gets added just beneath the `</testsuites>` closing element.

```xml
<logging>
    <log type="coverage-html"
         target="tests/coverage"
         showUncoveredFiles="true"
         charset="UTF-8"
         highlight="true"
         lowUpperBound="35"
         highLowerBound="70" />
</logging>
```

I'm telling PHPUnit that I want:

- The report to be output as HTML
- To output the report files into the `tests/coverage` directory
- To display files in the report that do not have associated tests (so we know where we should create tests)
- Highlight the coverage in either red (for uncovered) or green (for covered)
- Low upper bound is a percentage. This indicates of how uncovered a file can be before it is considered to be ”lowly" covered.
- The high upper bound is just the opposite. How covered a file is before its considered "highly" covered.

Lastly, we need to add a section that specifies directories to exclude from being parsed. This is required for the code coverage to function. It wouldn't make sense to allow PHPUnit to crawl all files in the `vendor` directory since that isn't our code, and therefore shouldn't be our responsibility to unit test.

Add this section directly under the `</logging>` section, replacing the `./your-source-files` with the directory your plugin code is contained in.

```xml
<filter>
    <whitelist processUncoveredFilesFromWhitelist="true">
        <directory suffix=".php">./your-source-files</directory>
        <exclude>
            <directory suffix=".php">/tests/</directory>
            <directory suffix=".php">/vendor/</directory>
        </exclude>
    </whitelist>
</filter>
```

## The Bootstrap File

Next we need to write the `bootstrap.php` file which acts as the entry point into the tests. First create the file inside of your `tests` directory...

```bash
touch tests/bootstrap.php
```

In order for PHPUnit to use this file, it will need to be defined in your `phpunit.dist.xml` file...

```xml
<?xml version="1.0"?>
<phpunit bootstrap="tests/bootstrap.php">
    ...
</phpunit>
```

The contents of this file will be fairly simple. We will need to define just a few things:

- Require the composer autoloader file so your dependencies can be loaded
- Your plugin entry file
- Any other dependencies you create (such as factories)
- Invoking the `1WP_Mock::bootstrap()` static method

Your file may end up looking something like this (replace `plugin-name` with your plugin entry file).

```php
require_once dirname( dirname( __FILE__ ) ) . '/vendor/autoload.php';
require_once dirname( dirname( __FILE__ ) ) . '/plugin-name.php';
WP_Mock::bootstrap();
```
Save that file, and let's move on.


## Writing a Test

Now is the time to write a simple passing test so you can ensure everything is wired up correctly.

In your tests directory, create a directory called `unit`. Create a test file inside of that directory called `test-example.php.`

```bash
cd tests && mkdir unit 
touch unit/test-example.php
```

Begin by defining your class and extending the `WP_Mock` test case class. In order for WP_Mock to work, you will have to implement the `setUp` and `tearDown` methods in every class that you use WP_Mock on. These methods let you define logic that should be executed as the test is about to run, and then directly after. You would put things such as instantiating stubs or mock objects.


```php
<?php

class TestExample extends WP_Mock\Tools\TestCase {
   
   public function setUp() {
        WP_Mock::setUp();
   }

   public function tearDown() {
        WP_Mock::tearDown();
   }
}

```

Next, add a method that just has a single assertion. Just to make things easy, let's assert that `true === true` since we know it will evaluate to, well, true...

```php
public function test_arbitrary_value() {
    $this->assertTrue( true );
}
```

Open up your terminal and run the tests...

```bash
./vendor/bin/phpunit
```

If all is well, you should see something to the following output...

```bash
Time: 1 seconds, Memory: 1.00MB

OK (1 tests, 1 assertions)
```

If for some reason you have any errors or failures use the output and error messages to debug and problem solve.

---

Hopefully that gives you a taste of how to set up tests with your WordPress plugin, but there's still plenty more to cover and learn. Stay tuned for part 2.


###### Edits

- March 4, 2019 - Fixed a typo
- March 5, 2019 - Fixed a typo