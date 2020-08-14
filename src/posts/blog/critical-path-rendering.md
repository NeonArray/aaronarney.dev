---
title: Critical Path Rendering
path: /blog/critical-path-rendering
date: 2020-08-14T14:49:31.509Z
category: Web
tags:
  - css
  - dom
  - cssom
---
# Critical Rendering Path

CRP or Critical Rendering Path is an algorithm of sorts that browsers use to display a webpage. When you use your browser to navigate to a webpage, a series of steps have to occur before you will see anything populate the screen. You can think of CRP as a linear top-down process in which the browser reads HTML one line at a time and forms the webpage as it goes.

The CRP process has several phases;

* DOM (Document Object Model)
* CSSOM (Cascading Style Sheet Object Model)
* Render Tree 
* Layout

In each of these phases a different set of steps occur. Let's go over them individually.

## Document Object Model (DOM)

The Document Object Model is a tree structure that represents the HTML on a webpage, by converting each HTML entity into a node object. When each HTML entity is encountered a `startTag` is generated. The parser then moves to the next token to see if there are any children of the entity. If there is a new node and `startTag` is generated, and so on and so forth until the end of the entity is found. At that point an `endTag` is created and that node is closed. These series of startTags and endTags form the tree that makes up the DOM.

As a simplified example, it may help to visualize it.

```html
<div>
    <div>
        <a href="#">
            Some Link
        </a>
    </div>
</div>
```

Could convert to something like the following. Note that this is a JavaScript flavor and probably not the best way or most accurate way to represent this information.

```javascript
startTag('div')
  .startTag('div')
    .startTag('a')
      .attribute('href', '#')
      .content('Some Link')
    .endTag('a')
  .endTag('div')
.endTag('div')
```

The more HTML on a page the longer this step takes. However, don't be fooled into thinking that reducing your HTML by a few or even dozens of elements will make a difference! Browsers are really fast and performance gains from such optimizations are likely to not result in anything significant.

## CSS Object Model (CSSOM)

The CSS object model works similar to the DOM except this time CSS is parsed and applied to nodes. When each CSS rule is encountered, the browser performs a lookup on the DOM to make a match to an element.

Both HTML and CSS are render blocking resources. However, using through the use of media queries you can achieve non-render blocking CSS. This is because the CSS is ignored if the viewport size doesn't match the media query, essentially deferring the application of the CSS. 

## Render Tree

The Render Tree is the phase in which the DOM and CSSOM are combined. Each node in the DOM has it's position and size computed. This phase is when the layout is created. Therefore, any time you modify the DOM such as adding or removing nodes, this phase gets re-triggered.

Here are some [common properties that trigger layout](https://docs.google.com/spreadsheets/u/0/d/1Hvi0nu2wG3oQ51XRHtMv-A_ZlidnwUYwgQsPQUg1R2s/pub?single=true&gid=0&output=html).

 |
--- | ---
| width | height |
| padding | margin |
| display | border-width |
| border | top |
| position | font-size |
| float | text-align |
| overflow-y | font-weight |
| overflow | left |
| font-family | line-height |
| vertical-align | right |
| clear | white-space |
| bottom | min-height |



## Painting

Finally at the end of the pipeline, the painting phase is when the render tree elements are converted into pixels on the screen.

The complete layout is generated and painted. Then for each node, lays out the elements on the page with their given dimensions and positions. Lastly it applies the remaining CSS to the element.

Just like with the layout there are CSS properties that can re-trigger paint.

The [common properties that trigger a re-paint](https://docs.google.com/spreadsheets/u/0/d/1Hvi0nu2wG3oQ51XRHtMv-A_ZlidnwUYwgQsPQUg1R2s/pub?single=true&gid=0&output=html).

 |
--- | ---
| color |	border-style
| visibility |	background
| text-decoration |	background-image
| background-position |	background-repeat
| outline-color |	outline
| outline-style |	border-radius
| outline-width |	box-shadow
| background-size |

As a sidenote, this is why with CSS animations it's fairly important you stick to the rules of only animating four things; position, scale, rotation and opacity. These operations allow the animation to run on the GPU instead of the browsers software rasterizer. For a more in-depth explanation of how this works, read the excellent post ["High Performance Animations."](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)

## Conclusion

This is a nutshell version of the Critical Rendering Path. It is worth diving into how to optimize the CRP but I will save that for another post. 
