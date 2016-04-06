Processing
==========

By default any file in pages, javascripts, stylesheets, _helpers(TODO)_ will be
preprocessed. More than that it can pass through multiple preprocessors. For
that just add preprocessor extension to file, in reverse order they are going to
be preprocessed, i.e. to preprocess html page with ejs and then with markdown,
use `index.html.md.ejs` which will be processed to `index.html`. Notice the html
extension presence in both files.

Three classes of preporcessors
------------------------------

You can preprocess js, html, css files. There are 3 classes of preprocessors:
First, Second and Third.

First class preprocessors __will__ work great in your project, are installed by
default, well-tested, and all their special features are supposed to work.

Second class preprocessors __should__ work great(TODO). They are smoke tested
and work as soon as you install them. Their special features should work too.

Third class preprocessors __may__ work great(TODO). They are not smoke tested
though, and their special features may not work.

More on that you can read [here][preprocessor-classes]

First Class Preprocsesors
-------------------------

By default fujisan comes with these preprocessors:

<table>
    <thead>
        <tr>
          <th>
            Preprocessor
          </th>
          <th>
            Extension
          </th>
          <th>
            Type
          </th>
        </tr>
    </thead>
    <tbody>
        <tr>
          <th scope="row">
            EJS
          </th>
          <td>
            ejs
          </td>
          <td>
            html
          </td>
        </tr>
        <tr>
          <th scope="row">
            Pug(ex-jade)
          </th>
          <td>
            jade (for now)
          </td>
          <td>
            html
          </td>
        </tr>
        <tr>
          <th scope="row">
            Handlebars(ex-jade)
          </th>
          <td>
            hbs
          </td>
          <td>
            html
          </td>
        </tr>
        <tr>
          <th scope="row">
            Markdown (commonmark engine)
          </th>
          <td>
            md
          </td>
          <td>
            html
          </td>
        </tr>
        <tr>
          <th scope="row">
            CoffeeScript
          </th>
          <td>
            coffee
          </td>
          <td>
            js
          </td>
        </tr>
        <tr>
          <th scope="row">
            SASS(scss-style)(TODO)
          </th>
          <td>
            scss
          </td>
          <td>
            css
          </td>
        </tr>
        <tr>
          <th scope="row">
            SASS(sass-style)
          </th>
          <td>
            sass
          </td>
          <td>
            css
          </td>
        </tr>
    </tbody>
</table>
<br/>

Second and Third Class Preprocsesors
--------------------------------

Second and third class preprocsesors are yet not supported. It's the matter of
contribution to [chained-preprocessors][chained-preprocessors]

Processing Pages
----------------

### Pug(ex-jade)

Jade is yet in [transition][jade-to-pug] to pug. So for now it's better to use
jade extension. Feel free to use includes and extends, using relative paths. Or
you can use absolute paths relative to `source` directory. I.e.

```pug
extends /layouts/main.html.jade
```

### Handlebars

Handlebars block helpers and _partials(TODO)_ are well supported.

Note Fujisan normalizes helpers, so that they can be used across different
apps. Thus in order to access handlebars options hash(last extra argument), you
have to use `this.arguments[0]`. Although `options.hash` is passed as last
options to the helper(TODO). So helpers could be used in a similar manner in
ejs, and hbs:

```ejs
<%- linkTo('/', 'index', { 'class': 'primary' }) %>
```

```hbs
{{{ linkTo "/" "index" class="primary" }}}
```

You can disable this behaviour by setting
`config.preprocsesors.normalizeHelpers` to `false`;

Processing JavaScripts
----------------------

By default all javascripts, [will go through babel][javascripts-babel].

Configuration
-------------

Preprocessors can be configured via `config.preprocessors`. You can disable
helpers normalization(look Handlebars section of this page), via
`config.preprocessors.helpers`. You can pass whatever data or configuration
which will affect all preprocessors via `config.preprocessors.all`, or tweak
each preprocessor via it extension as key, i.e. `config.preprocessors.hbs`.

[< Back to Documentation][documentation]

[documentation]: ./documentation.html
[preprocessor-classes]: https://github.com/BeadWall/fujisan/wiki/Preprocessors
[javascripts-babel]: ./javascripts.html
[chained-preprocessors]: https://github.com/BeadWall/chained-preprocessors
[jade-to-pug]: https://github.com/pugjs/pug/issues/2184
