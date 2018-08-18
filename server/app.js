var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var userController =require('./controllers/controller/userController')
var homeController =require('./controllers/controller/homeController')

var app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname.toString().slice(0,__dirname.toString().length-7)+ '/client-app/build')));
// }

app.use(express.static(path.join(__dirname,'build')));



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
userController(app);
homeController(app);


app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname+'build/index.html'));

});

  

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
