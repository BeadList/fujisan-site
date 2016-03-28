Layouts
=======

Layouts are blocks of pages which wrap around your main parts of pages, and can
be used for storing common parts like headers, footers, scripts, and
stylesheets.

Layouts are stored in layouts directory. They can be preprocessed same way as
the pages are.

Let's say we've got a handlebars layout:

```html
<!doctype html>
<html class="no-js" lang="">
  <head>
    <link rel="stylesheet" href="stylesheets/main.css">
  </head>
  <body>
     {{{ yield_content }}}
     <script src="javascripts/main.js"></script>
  </body>
</html>
```

And the index page:

```html
<h1>Index</h1>

<p>
  The symbol ☞ is a punctuation mark, called an index, manicule (from the
  Latin root manus for "hand" and manicula for "little hand") or fist. Other
  names for the symbol include printer's fist, bishop's fist, digit,
  mutton-fist, hand, hand director, pointer, and pointing hand.
</p>
```

Then, the index page will be inserted in the place of `{{{ yield_content }}}`.
And the rendered page will be:

```html
<!doctype html>
<html class="no-js" lang="">
  <head>
    <link rel="stylesheet" href="stylesheets/main.css">
  </head>
  <body>
     <h1>Index</h1>
     <p>
       The symbol ☞ is a punctuation mark, called an index, manicule (from the
       Latin root manus for "hand" and manicula for "little hand") or fist. Other
       names for the symbol include printer's fist, bishop's fist, digit,
       mutton-fist, hand, hand director, pointer, and pointing hand.
     </p>
     <script src="javascripts/main.js"></script>
  </body>
</html>
```
