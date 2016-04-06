Stylesheets
===========

Stylesheets are your css files, which are going to be
[processed][processing-css]. As in the [pages][pages], you can use
[partials][partials] and [helpers][helpers] inside your stylesheets, for more
flexible generation. For instance, it can be used for passing build variables or
pices of html to your css via ejs:

```css
// Button Component:
// <%- partial('button', { label: 'Ok'}) %>
.button {
  color: <%- buttonColor %>
}
```

Which can result in:

```css
// Button Component:
// <button class="btn">Ok</button>
.button {
  color: RebeccaPurple;
}
```

Pages go into `source/stylesheets` directory.

[< Back to Documentation][documentation]

[documentation]: ./documentation.html
[processing-css]: ./processing.html
[pages]: ./pages.html
[partials]: ./partials.html
[helpers]: ./helpers.html
