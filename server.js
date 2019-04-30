const path = require( "path");
const express = require( "express");
const webpack = require( "webpack");
const webpackDevMiddleware = require( "webpack-dev-middleware");
const webpackHotMiddleware = require( "webpack-hot-middleware");
const devWebpackConfig = require( "./webpack.dev.js");


const app           = express(),
      DIST_DIR      = path.join(__dirname, "dist"),
      HTML_FILE     = path.join(DIST_DIR, "public", "index.html"),
      isDevelopment = process.env.NODE_ENV !== "production",
      DEFAULT_PORT  = 3000

app.set("port", process.env.PORT || DEFAULT_PORT);

if (isDevelopment) {
  var compiler = webpack(devWebpackConfig);
  // app.use(webpackDevMiddleware(compiler,
  // {noInfo: true, publicPath: devWebpackConfig.output.path}))
  // console.log(devWebpackConfig.output.path, 'aaa')
  // console.log(DIST_DIR, 'bbb')
  // app.use(webpackHotMiddleware(compiler));
  //
  // app.get("*", function(req, res) {
  //   res.sendFile(path.join(__dirname, 'public', 'index.html'))
  // });
  //
  // app.listen(app.get('port'), () => 'Dev server started');


  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: '/'
  }));

  app.use('*', function (req, res, next) {
    var filename = path.join(compiler.outputPath ,'public' ,'index.html');
      compiler.outputFileSystem.readFile(filename, function(err, result){
        if (err) {
          return next(err);
        }

        res.set('content-type','text/html');
        res.send(result);
        res.end();
    });

  });


}
else {
	app.use(express.static(DIST_DIR, {maxAge: "30d"}));
	app.get("*", (req, res) => res.sendFile(HTML_FILE));
}

app.listen(app.get("port"));
