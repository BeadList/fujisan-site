Documentation
=============

Fujisan is a static site generator.

It supports all default features you would expect from static site generator:
[partials][partials], [layouts][layouts], [helpers][helpers], _data(TODO)_,
_frontmatter(TODO)_. A bunch of preprocessors are already built in, including
ejs, handlebars, markdown, [pug][pug], sass, coffeescript, babel. The rest can
be installed as easy as just including their name to your `packages.json`.

And more than that you can actually chain preprocessors, to pass one file
through several preprocessors. Which alows you to use handlebars(or ejs, or
whatever) alongside with markdown in the same file.

Fujisan is based on gulp and expected to use just rock solid technologies at its
foundation, to make integration into existing projects is _peace of cake(lie,
TODO)_. Writing extensions and tweaking internals is easy as well.

You can link your resources easily by using awesome _resourceTree(TODO)_.


Key Principles
--------------

- Everything included by defaults. So, you won't spend much time configuring and
  can get to value very fast, not building your infrastructure.
- Based on known technology, easy to extend and change if the defaults don't
  work well for you.
- As less WTF moments for developer as possible.

Installation
------------

```shell
npm install --save-dev gulp fujisan
```

And in your gulpfile put this:

```js
var gulp = require('gulp');
var config = {};
var fujisan = require('fujisan')({ gulp: gulp, config: config });
```

You can learn more about configuration here(TODO).

Usage
--------

Check out each feature page to get the maximum from Fujisan.

- [Public][public]
- [Pages][pages]
- [Javascripts][javascripts]
- [Stylesheets][stylesheets]
- [Processing][processing]
- [Helpers][helpers]
- [Partials][partials]
- [Layouts][layouts]

More great and important features are comming soon.

[home]: /
[intro]: ./intro.html
[processing]: ./processing.html
[pages]: ./pages.html
[javascripts]: ./javascripts.html
[stylesheets]: ./stylesheets.html
[public]: ./public.html
[partials]: ./partials.html
[helpers]: ./helpers.html
[layouts]: ./layouts.html
[pug]: https://github.com/pugjs/pug/issues/2184
