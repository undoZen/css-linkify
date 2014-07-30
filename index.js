'use strict';
var path = require('path');
var through = require('through2');

module.exports = function (root) {
  return function (file) {
    return through(function (buf, enc, next) {
      if (file.match(/\.css$/i)) {
        var pathToRoot = '/' + path.relative(root + '/', file);
        this.push('require("'+__dirname+'/node_modules/link-css")("'+pathToRoot+'");');
      } else {
        this.push(buf);
      }
      next();
    });
  }
};
