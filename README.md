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

**Documentation**
I've seen often where people praise Gatsby for their clear and helpful documentation, but I will say that for someone with 4 or 5 years of JavaScript experience and using a ton of different frameworks, I still found myself confused and frustrated at certain points.

I believe Gatsby will continue to improve and evolve so I am confident it will only get better from here.

**Prism**
I ran into an issue with Prism that made displaying code blocks kind of challenging. The problem I encountered was that I wanted to be able to use markdown
to write my posts while also having the flexibility to displaying the language of a code block, along with a copy code button. I was hopeful that I could use
the Github flavor of code blocks in markdown as well instead of having to write HTML in my markdown. 

Exacerbating the issue was the fact that my code blocks were styled differently than the content around it on the page. My code blocks are 100% width of the 
viewport, while the remaining content in posts are limited to a max width of 666 pixels. This meant I needed to close off the wrapping div before injecting
my code block HTML, finally re-opening the wrapping div.

After hours (or maybe days, I don't remember) of attempting different solutions, the ultimate winner was a regex that parses the HTML output by the Gatsby markdown
plugin and replaces any code block with the appropriate structure.

```javascript
const REGEXP = new RegExp('<div class="gatsby-highlight" data-language="([a-z]*)?">(\t|\r|\n|.)*?<\/div>', 'g');
html += content.html.replace(REGEXP,
    `</div><div class="${ style.block }"><div class="${ style.heading }">` +
    `<p class="${ style.language }">$1</p></div>` +
    `<div class="${ style.wrapper } gatsby-highlight">$&</div></div><div class="${ style.copy }">`
);
```
