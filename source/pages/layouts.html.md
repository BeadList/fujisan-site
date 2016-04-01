Layouts
=======

Layouts are blocks of pages which wrap around your main parts of pages, and can
be used for common parts like headers, footers, scripts, and stylesheets.

Layouts are stored in layouts directory. They can be preprocessed same way as
the pages are.

Let's say we've got a handlebars layout:

```hbs
<!doctype html>
<html class="no-js" lang="">
  <head>
    <link rel="stylesheet" href="stylesheets/main.css">
  </head>
  <body>
     {{{ yieldContent }}}
     <script src="javascripts/main.js"></script>
  </body>
</html>
```

And the index page:

```html
<h1>Fitz Roy</h1>

<p>
  Monte Fitz Roy (also known as Cerro Chaltén, Cerro Fitz Roy, or simply Mount
  Fitz Roy) is a mountain located near El Chaltén village, in the Southern
  Patagonian Ice Field in Patagonia, on the border between Argentina and
  Chile. First climbed in 1952 by French alpinists Lionel Terray and Guido
  Magnone, it remains among the most technically challenging mountains for
  mountaineers on Earth.
</p>
```

Then, the index page will be inserted in the place of `{{{ yieldContent }}}`.
And the rendered page will be:

```html
<!doctype html>
<html class="no-js" lang="">
  <head>
    <link rel="stylesheet" href="stylesheets/main.css">
  </head>
  <body>
     <h1>Fitz Roy</h1>
     <p>
       Monte Fitz Roy (also known as Cerro Chaltén, Cerro Fitz Roy, or simply
       Mount Fitz Roy) is a mountain located near El Chaltén village, in the
       Southern Patagonian Ice Field in Patagonia, on the border between
       Argentina and Chile. First climbed in 1952 by French alpinists Lionel
       Terray and Guido Magnone, it remains among the most technically
       challenging mountains for mountaineers on Earth.
     </p>
     <script src="javascripts/main.js"></script>
  </body>
</html>
```

You can use whatever preprocessors: for example including markdown + handlebars
page into pug templates.

Defining content for specific parts of layout
---------------------------------------------

You can define certain parts of layouts, by using `contentFor(key, string)`. And
for template engines which support block helpers, you can pass blocks. I.e.

```hbs
{{ contentFor 'title' 'Fitz Roy' }}
{{# contentFor 'discovery' }}
  Argentine explorer Francisco Moreno first saw the mountain on 2 March 1877. He
  named it Fitz Roy, in honour of Robert FitzRoy, who, as captain of the HMS
  Beagle had travelled up the Santa Cruz River in 1834 and charted large parts
  of the Patagonian coast.
{{/ contentFor }}

<p>
  Monte Fitz Roy (also known as Cerro Chaltén, Cerro Fitz Roy, or simply
  Mount Fitz Roy) is a mountain located near El Chaltén village, in the
  Southern Patagonian Ice Field in Patagonia, on the border between
  Argentina and Chile. First climbed in 1952 by French alpinists Lionel
  Terray and Guido Magnone, it remains among the most technically
  challenging mountains for mountaineers on Earth.
</p>
</html>
```

And for using you can just pass the key to yield content function.

```hbs
<!doctype html>
<html class="no-js" lang="">
  <head>
    <link rel="stylesheet" href="stylesheets/main.css">
    <title
      {{ yieldContent 'title' }}
    </title>
  </head>
  <body>
     <h1>{{{ yieldContent 'title' }}}</h1>
     {{{ yieldContent }}}
     <script src="javascripts/main.js"></script>
  </body>
</html>
```

Default values
--------------

You can specify default values for `yieldContent` as second argument or as a
block.

```hbs
<!doctype html>
<html class="no-js" lang="">
  <head>
    <link rel="stylesheet" href="stylesheets/main.css">
    <title
      {{ yieldContent 'title' 'Amazing Mountains' }}
    </title>
  </head>
  <body>
     {{# yieldContent 'heading }}
       <h1> One more lovely mountain</h1>
     {{/ yieldContent }}
     {{{ yieldContent }}}
     <script src="javascripts/main.js"></script>
  </body>
</html>
```

Template specific layouts
-------------------------

You still can use template specific layouts, like `extends` in pug.

```jade
doctype html
html
  head
    link(rel="stylesheet" href="stylesheets/main.css")
    block title
      title Amazing Mountains
  body
    block heading
      h1 One more lovely mountain
    block content
    script(src="javascripts/main.js")
```

Configuration
-------------

You can set default template name via `config.layout`, or disable layouts all
together by setting it to false. Its default value is 'default';

```json
{
  layout: 'main'
}
```
