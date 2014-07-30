css-linkify
===========

Just require('style.css') in your javascript and then pass it to browserify. css-linkify will help you add a `<link>` tag in `<head>` to load it.

##Installation

    npm install css-linkify

##Usage

server-side (using express):

    app.get('/bundle.js', function (req, res, next) {
      res.set('content-type', 'application/javascript; charset=utf-8');
      browserify()
        .add('./bundle.js')
        .transform(require('../index.js')(__dirname, {prepend: true}))
        .bundle()
        .pipe(res);
    });

    app.use(require('express/node_modules/serve-static')(__dirname));

bundle.js:

    require('./style.css');

index.html:

    <p>Background color of this page should be green.</p>
    <script src="/bundle.js"></script>

style.css:

    body { background: green; }

##Lisence
MIT
