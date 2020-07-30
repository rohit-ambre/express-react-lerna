const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');

const logger = require('./winston-config');
const indexRouter = require('./routes/index');

// eslint-disable-next-line no-var
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(
  morgan('combined', {
    stream: logger.stream
    // only log error responses
    // skip: (req, res) => {
    //     return res.statusCode < 400;
    // },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message =
    req.app.get('env') === 'development'
      ? err.message
      : 'Internal Server Error';
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  if (!err.status) logger.error(`error: ${err.message} \n stack: ${err.stack}`);
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
