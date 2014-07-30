var app = require('express')();
var browserify = require('browserify');
var watchify = require('watchify');
var extend = require('extend');

app.get('/bundle.js', function (req, res, next) {
  res.set('content-type', 'application/javascript; charset=utf-8');
  var b = browserify(extend({debug: true}, watchify.args));
  watchify(b);
  b.add('./bundle.js')
  .transform(require('../index.js')(__dirname))
  .bundle()
  .pipe(res);
});

app.use(require('express/node_modules/serve-static')(__dirname));

app.listen(4123);
