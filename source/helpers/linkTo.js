'use strict';

module.exports = (path, text, options) => {
  // HACK: Use this.pathTo
  let root = '';
  let suffix = '';
  if(process.env.NODE_ENV === 'production') {
    root = 'http://beadwall.github.io/fujisan/';
  } else {
    if(path !== '/') {
      suffix = '.html';
    }
  }
   return `<a class="${options.class}" href="${root + path + suffix}">${text}</a>`;
};
