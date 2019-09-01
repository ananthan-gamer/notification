var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var MyContractJSON = require(path.join(__dirname, 'build/contracts/noti.json'));
var Web3 = require('web3');
sqlite3 = require('sqlite3').verbose();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));


contractAddress = MyContractJSON.networks['5777'].address;
const contractAbi = MyContractJSON.abi;
notiContract = new web3.eth.Contract(contractAbi, contractAddress);

coinbase = "0x3146986C35C866A310DE5d22b4759Ee4B8B2EB8D";

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
