var createError = require('http-errors');
const cors=require('cors')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var connection=require('./connection')
var indexRouter = require('./routes/index');
var fournisseursRouter=require('./routes/fournisseurs')
var sectionsRouter=require('./routes/sections')
var membersRouter=require('./routes/members')
var topicsRouter=require('./routes/topics')
var adminsRouter=require('./routes/admins')
var entrepriseRouter=require('./routes/entreprises')
var boiteRouter = require('./routes/boites')
var clientsRouter=require('./routes/clients')
var typesRouter=require('./routes/types')
var app = express();
var uploadroute=require('./routes/upload')
var tryRouter =require('./routes/tryy')
var routePost=require('./routes/post');
const bodyParser = require('body-parser');
var MongoClient=require('mongodb').MongoClient
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
 app.use(function (req,res,next){
  //Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});
app.use(bodyParser.json())
app.use('/', indexRouter);

app.use('/sections',sectionsRouter)
app.use('/members',membersRouter)
app.use('/topics',topicsRouter)
app.use('/admins',adminsRouter)
app.use('/entreprise',entrepriseRouter)
app.use('/boite',boiteRouter)
app.use('/clients',clientsRouter)
app.use('/fournisseurs',fournisseursRouter)
app.use('/autres',typesRouter)
app.use('/',uploadroute)
app.use('/insert',tryRouter)
app.use('/',routePost)

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
