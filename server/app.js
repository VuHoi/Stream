var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Router
var userController =require('./controllers/controller/userController')
var homeController =require('./controllers/controller/homeController')



//config
var configCommon = require('./controllers/models/db');
var validateRequest = require('./middleware/validateRequest');
var configRoute =require('./middleware/configRouter');

//mongose db
var mongoose = require('mongoose');
mongoose.connect(configCommon.url,{ useNewUrlParser: true });
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var db = mongoose.connection;
var app = express();
app.set('superSecret', configCommon.secret);
// if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,'build')));
    // app.use(express.static(path.join(__dirname.toString().slice(0,__dirname.toString().length-7)+ '/client-app/build')));
// }
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.all('/*', configRoute);
app.all('/api/*', [validateRequest]);
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

app.use(session({
    secret: 'wordhard',
    resave: true,
    saveUninitialized: false,
    cookie: {  },
    store: new MongoStore({
        mongooseConnection: db
    })
}));

module.exports = app;
