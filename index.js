'use strict';
var path = require('path');
var through = require('through2');

module.exports = function (root, options) {
  if ('boolean' == typeof options) {
    options = {prepend: options};
  } else {
    options = options || {};
  }
  var opts = JSON.stringify(options);
  return function (file) {
    return through(function (buf, enc, next) {
      if (file.match(/\.css$/i)) {
        var pathToRoot = '/' + path.relative(root + '/', file);
        this.push('require("'+__dirname+'/node_modules/link-css")("'+pathToRoot+'",'+opts+');');
      } else {
        this.push(buf);
      }
      next();
    });
  }
};
