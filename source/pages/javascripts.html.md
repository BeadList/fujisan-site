JavaScripts
===========

JavaScripts are clientside js files, which are going to be
[processed][processing-js]. By default, you can use ES6, which is transformed by
babel. As in the [pages][pages], you can use [partials][partials] and
[helpers][helpers] inside your javascripts, for more flexible generation. For
instance, it can be used for passing build variables or pices of html to your
js via ejs:

```js
const isProduction = <%- process.env.NODE_ENV === 'production' %>;
const simpleTemplate = (path, name) => {
  return `<%- partial('simple-one') %>`
};
```

Which can result in:

```js
const isProduction = true;
const simpleTemplate = (path, name) => {
  retrurn `<a href="${path}">${name}</a>`
};
```

Pages go into `source/javascripts` directory.

Configuration
-------------

You can change babel settings via `config.babel`. Or you can disable
it all together by setting it to _false(TODO)_. Its default value is

```json
{
  babel: {
    presets: ['es2015']
  }
}
```

[< Back to Documentation][documentation]

[documentation]: ./documentation.html
[processing-js]: ./processing.html
[pages]: ./pages.html
[partials]: ./partials.html
[helpers]: ./helpers.html
