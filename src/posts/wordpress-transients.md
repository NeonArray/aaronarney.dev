---
path: "/blog/wordpress-transients"
date: "2019-11-29"
title: "WordPress Transients"
category: "web"
tags: ["wordpress", "cache"]
---

WordPress has several great API’s for caching and retrieving data, transients being one of them.

Transients are best used in situations that you need to persist data through several request-response transactions. They can have either a set expiration time or default to “indefinite.”

If you’ve used a custom WP_Query at any point in your theme or plugin, you might already have a great use-case for implementing the transient API.

The best part of transients is just how ridiculously simple they are to use. There are only two functions you need, get_transient and set_transient.

```php
set_transient( 'name_of_key', array( 'some' => 'values' ), 60 * MINUTE_IN_SECONDS );
```

This code snippet stores an array of data with an expiration time of 60 minutes. Note that this is not guaranteed by WordPress to remain viable for 60 minutes. The expiration time is simply the maximum time that the transient should potentially be present. Because of this you should always ensure that there is a fallback routine to refresh the data set should the cache not be there!

```php
if ( ! get_transient( 'key' ) ) {
	$data = new WP_Query( array( 'post_type' => 'cpt' ) );
	set_transient( 'key', $data, 60 * MINUTE_IN_SECONDS );
}
```

Something else you will need to consider is cache priming. Let’s say you have a transient that is storing an array of possible values for a custom select dropdown element on a page. This data is being populated through all the titles in a custom post type you’ve created.

Now, imagine that a visitor hits your site and triggers a new transient cache. This transient is set to expire in 60 minutes, but only a few minutes later one of your editors adds a new post. This new post will not be present in the transient for possibly an hour!

The way to account for this is to prime your cache by adding an action that triggers when your custom post types are modified. This way you can clear any transients and ensure that your data is as fresh as possible.

```php
function prime_my_cache() : void {
	delete_transient( 'key' );

	$data = new WP_Query( array( 'post_type' => 'cpt' ) );
		
	set_transient( 'key', $data, 60 * MINUTE_IN_SECONDS );
}
add_action( 'edit_post_custom_post_type', 'prime_my_cache' );
```

Very cool and very easy.

## Resources

- [WordPress Transients API](https://codex.wordpress.org/Transients_API)