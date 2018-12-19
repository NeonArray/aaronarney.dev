# Ocular-Rhythm Site

The source code to my personal website and blog, Ocular-Rhythm. I built this using Gatsby, which is a rad JavaScript framework. I also used Netlify for the first time with this project and am extremely impressed with it.

All code can be found in the `src` directory. Inside that directory, the structure is broken down into several sub-directories:

- `Components` - This is where all of the React components are situated. Each component has its' own sub-directory that contains an `index.js` file and its' `css` module.
- `Global` - I put global CSS styles in here
- `Images` - Static images
- `Pages` - Pages that also are named routes
- `Posts` - The blog posts in markdown form
- `Templates` - Blog post and category templates
- `Utils` - Utility functions

To get started, just run `yarn install` and then `yarn develop`.


## Learnings

Getting up and running in Gatsby is fairly straightforward. Writing components in React and piecing those together is also nothing new. The biggest hurdle I had to tackle was figuring out how to structure my pages/posts in a way that reflects the URL structure I was looking for. After a while a tinkering and trial and error, I found the sweet spot.

I've seen often where people praise Gatsby for their clear and helpful documentation, but I will say that for someone with 4 or 5 years of JavaScript experience and using a ton of different frameworks, I still found myself confused and frustrated at certain points.

I believe Gatsby will continue to improve and evolve so I am confident it will only get better from here.
