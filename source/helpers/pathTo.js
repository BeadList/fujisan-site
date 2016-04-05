'use strict';

module.exports = (path, isPage) => {
  let root = '';
  let suffix = '';
  if(process.env.NODE_ENV === 'production') {
    root = 'http://beadwall.github.io/fujisan';
  } else {
    if(path !== '/' && isPage) {
      suffix = '.html';
    }
  }
  return root + path + suffix;
};
