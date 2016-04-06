Partials
========

Partials are small chunks of pages which can be used across pages to avoid
duplication. You can use them in pages, layouts, other partials or even in
helpers.

Partials are stored in `source/partials` directory.

Let's say we've got a handlebars partial:

```html
<header>
   <strong>{{mountainName}}</strong>
</header>
```

And we have pug partial footer:

```jade
footer
  strong= {{discoveredBy}}
```

We can include them into ejs partial using universal `partial` helper:

```html
<%- partial('header', { mountainName: "Fitz Roy" }) %>
<main>
  <p>
  Argentine explorer Francisco Moreno first saw the mountain on 2 March 1877. He
  named it Fitz Roy, in honour of Robert FitzRoy, who, as captain of the HMS
  Beagle had travelled up the Santa Cruz River in 1834 and charted large parts
  of the Patagonian coast.
  </p>
</main>
<%- partial('footer, { discoveredBy: "Francisco Moreno" }) %>
```

Which will result in page:
```html
<header>
   <strong>Fitz Roy/strong>
</header>
<main>
  <p>
  Argentine explorer Francisco Moreno first saw the mountain on 2 March 1877. He
  named it Fitz Roy, in honour of Robert FitzRoy, who, as captain of the HMS
  Beagle had travelled up the Santa Cruz River in 1834 and charted large parts
  of the Patagonian coast.
  </p>
</main>
<footer>
   <strong>Francisco Moreno</strong>
</footer>
```

TODO: Additionaly you can use engine specific partials

[< Back to Documentation][documentation]

[documentation]: ./documentation.html
