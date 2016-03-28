Partials
========

Partials are small chunks of pages which can be used across pages to avoid
duplication. You can use them in pages, layouts, other partials or even in
helpers.

Partials are stored in partials directory. They can be preprocessed same way as
the pages are.

Let's say we've got a handlebars partial:

```html
<header>
   <strong>{{princessName}}</strong>
</header>
```

And we have jade partial footer:

```jade
footer
  strong= kingName
```

We can include them into ejs partial using universal `partial` helper:

```html
<%- partial('header', { princessName: "Lumpy Space Princess" }) %>
<main>
  <h1>Ooo</h1>
</main>
<%- partial('footer, { kingName: "Ice King" }) %>
```

Which will result in page:
```html
<header>
   <strong>Lumpy Space Princess</strong>
</header>
<main>
  <h1>Ooo</h1>
</main>
<footer>
   <strong>Ice King</strong>
</footer>
```

TODO: Additionaly you can use engine specific partials
