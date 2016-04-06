Helpers
=======

Helpers are small pieces of javascripts, which used to simplify generation of
your your pages, stylesheets, javascripts.

For example, let's say you've got there file "heading.js", with
contents:

```js
export default (text) => {
  return `<h1 class="heading">${text}</h1>`
};
```

Then you can use it in your templates, let's say you use handlebars,
the you would use your helper like this:

```js
{{{ heading "Fitz Roy" }}}
<p>
  Argentine explorer Francisco Moreno first saw the mountain on 2 March 1877. He
  named it Fitz Roy, in honour of Robert FitzRoy, who, as captain of the HMS
  Beagle had travelled up the Santa Cruz River in 1834 and charted large parts
  of the Patagonian coast.
</p>

```

Helpers should be stored in `/source/helpers`

Helpers Normalization
---------------------

By default Fujisan normalizes helpers, so that they can be used across different
apps. All extra arguments are stored in `arguments` of the context of
helper. And helper context can be accessed via `this` within the function.

You can use block helpers if they are supported by your template engine.

[< Back to Documentation][documentation]

[documentation]: ./documentation.html
