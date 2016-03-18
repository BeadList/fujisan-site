Chain Preprocessors
===================

By default any file in helpers, javascripts, stylesheets, partials,
layouts, pages can be preprocessed. More than that it can pass through
multiple preprocessors. For that just add preprocessor extension to
file, in reverse order they are going to be preprocessed, i.e. to
preprocess html page with ejs and then with markdown, add `ejs` and
`md` extensions to file in reverse order, thus file `index.html.md.ejs` will
be converted to `index.html`. Notice the html extension presence in both files.

You can preprocess js, html, css files. By default fujisan comes with
these preprocessors:

- ejs
- handlebars
- jade
- markdown
- coffeescript
- sass

Feel free to install whichever preprocessor you going to use in project.
