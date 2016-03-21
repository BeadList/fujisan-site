Helpers
=======

Whatever js files you put in helpers, you can use later on in your templates.
For example, let's say you've got there file "heading.js", with contents:

```js
export default (text) => {
  return `<h1 class="heading">${text}</h1>`
};
```

Then you can use it in your templates, let's say you use handlebars,
the you would use your helper like this:

```js
{{ heading "Shelby" }}
<p>This is all gonna work out just fine.</p>

```
